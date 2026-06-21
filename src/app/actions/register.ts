"use server";

import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export type RegisterState = {
  ok: boolean;
  message: string;
} | null;

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export async function registerMember(
  _prev: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subsector = String(formData.get("subsector") ?? "").trim();
  const district = String(formData.get("district") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Validation
  if (!name || !email || !phone || !subsector || !district) {
    return { ok: false, message: "Mohon lengkapi semua kolom yang wajib diisi." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Format email tidak valid." };
  }

  // Persist to Supabase when configured; otherwise acknowledge gracefully.
  const admin = getSupabaseAdmin();
  if (isSupabaseConfigured && admin) {
    const { error } = await admin.from("members").insert({
      name,
      email,
      phone,
      subsector,
      district,
      message: message || null,
      initials: initialsFrom(name),
      status: "pending",
    });
    if (error) {
      if (error.code === "23505") {
        return { ok: false, message: "Email ini sudah terdaftar sebelumnya." };
      }
      return {
        ok: false,
        message: "Terjadi kendala saat menyimpan data. Coba lagi sebentar.",
      };
    }
  }

  return {
    ok: true,
    message: `Terima kasih, ${name.split(/\s+/)[0]}! Pendaftaranmu kami terima. Tim GEKRAFS Ponorogo akan menghubungi via email/WhatsApp.`,
  };
}
