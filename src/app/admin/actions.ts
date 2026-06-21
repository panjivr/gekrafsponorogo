"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, adminConfigured, expectedToken, isAdmin } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase";

export type LoginState = { error: string } | null;

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!adminConfigured()) {
    return { error: "ADMIN_PASSWORD belum diset di environment server." };
  }
  const pw = String(formData.get("password") ?? "");
  if (pw !== process.env.ADMIN_PASSWORD) {
    return { error: "Password salah. Coba lagi." };
  }
  const store = await cookies();
  store.set(ADMIN_COOKIE, expectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 jam
  });
  redirect("/admin");
}

export async function logout() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function updateMemberAction(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["approved", "rejected", "pending"].includes(status)) return;

  const sb = getSupabaseAdmin();
  if (!sb) return;
  await sb.from("members").update({ status }).eq("id", id);
  revalidatePath("/admin");
  revalidatePath("/anggota");
}
