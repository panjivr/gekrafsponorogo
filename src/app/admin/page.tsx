import type { Metadata } from "next";
import { LogOut, Inbox, CheckCircle2, XCircle, Database, Mail, Phone, MapPin } from "lucide-react";
import { isAdmin, adminConfigured } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase";
import { formatDateID } from "@/lib/format";
import LoginForm from "@/components/admin/LoginForm";
import { logout, updateMemberAction } from "./actions";

export const metadata: Metadata = {
  title: "Panel Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Row = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  subsector: string;
  district: string;
  status: string;
  message: string | null;
  created_at: string;
};

const statusStyle: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-700",
};

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return <LoginForm configured={adminConfigured()} />;
  }

  const sb = getSupabaseAdmin();
  let rows: Row[] = [];
  if (sb) {
    const { data } = await sb
      .from("members")
      .select("*")
      .order("created_at", { ascending: false });
    rows = (data ?? []) as Row[];
  }

  const pending = rows.filter((r) => r.status === "pending").length;
  const approved = rows.filter((r) => r.status === "approved").length;

  return (
    <div className="mx-auto max-w-[1100px] px-5 sm:px-8 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[28px] font-semibold tracking-tight text-[#0a1b33]">
            Panel Admin — Pendaftar
          </h1>
          <p className="mt-1 text-[14px] text-slate-500">
            Data pendaftaran anggota masuk ke tabel <code className="font-mono">members</code> di Supabase.
          </p>
        </div>
        <form action={logout}>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0a1b33] hover:border-slate-300">
            <LogOut className="h-4 w-4" />
            Keluar
          </button>
        </form>
      </div>

      {!sb ? (
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 text-[14px] text-amber-900">
          <Database className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">Supabase belum terhubung.</p>
            <p className="mt-1 text-[13px]">
              Set <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> dan{" "}
              <code className="font-mono">SUPABASE_SERVICE_ROLE_KEY</code> di Vercel,
              jalankan <code className="font-mono">supabase/schema.sql</code>, lalu redeploy.
              Pendaftar akan otomatis muncul di sini.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-400">
                <Inbox className="h-4 w-4" />
                <span className="text-[12px] font-semibold uppercase tracking-wide">Total</span>
              </div>
              <p className="mt-2 font-stat text-[28px] font-bold text-[#0a1b33]">{rows.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
              <div className="flex items-center gap-2 text-amber-500">
                <Inbox className="h-4 w-4" />
                <span className="text-[12px] font-semibold uppercase tracking-wide">Menunggu</span>
              </div>
              <p className="mt-2 font-stat text-[28px] font-bold text-[#0a1b33]">{pending}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
              <div className="flex items-center gap-2 text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-[12px] font-semibold uppercase tracking-wide">Disetujui</span>
              </div>
              <p className="mt-2 font-stat text-[28px] font-bold text-[#0a1b33]">{approved}</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {rows.length === 0 && (
              <p className="rounded-2xl border border-slate-200/70 bg-white px-6 py-8 text-center text-[14px] text-slate-500">
                Belum ada pendaftar. Pendaftaran dari halaman /daftar akan muncul di sini.
              </p>
            )}
            {rows.map((m) => (
              <div
                key={m.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[16px] font-semibold text-[#0a1b33]">{m.name}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusStyle[m.status] ?? "bg-slate-100 text-slate-600"}`}>
                      {m.status}
                    </span>
                    <span className="rounded-full bg-[#00aeef]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0087d1]">
                      {m.subsector}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-slate-500">
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 hover:text-[#0a1b33]">
                        <Mail className="h-3.5 w-3.5" /> {m.email}
                      </a>
                    )}
                    {m.phone && (
                      <a href={`https://wa.me/${m.phone.replace(/\D/g, "").replace(/^0/, "62")}`} className="inline-flex items-center gap-1 hover:text-[#0a1b33]">
                        <Phone className="h-3.5 w-3.5" /> {m.phone}
                      </a>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {m.district}
                    </span>
                    <span>{formatDateID(m.created_at)}</span>
                  </div>
                  {m.message && (
                    <p className="mt-2 max-w-2xl text-[13px] italic text-slate-500">“{m.message}”</p>
                  )}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <form action={updateMemberAction}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="status" value="approved" />
                    <button
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                      disabled={m.status === "approved"}
                    >
                      <CheckCircle2 className="h-4 w-4" /> Setujui
                    </button>
                  </form>
                  <form action={updateMemberAction}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="status" value="rejected" />
                    <button
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-[12.5px] font-semibold text-slate-600 hover:border-red-300 hover:text-red-600 disabled:opacity-50"
                      disabled={m.status === "rejected"}
                    >
                      <XCircle className="h-4 w-4" /> Tolak
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
