"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Lock, AlertCircle, Loader2 } from "lucide-react";
import { login, type LoginState } from "@/app/admin/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
      Masuk
    </button>
  );
}

export default function LoginForm({ configured }: { configured: boolean }) {
  const [state, formAction] = useActionState<LoginState, FormData>(login, null);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-5">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1]">
          <Lock className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h1 className="mt-5 font-display text-[22px] font-semibold text-[#0a1b33]">
          Panel Admin GEKRAFS
        </h1>
        <p className="mt-1.5 text-[14px] text-slate-500">
          Masuk untuk melihat & mengelola pendaftar anggota.
        </p>

        {!configured && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[12.5px] font-medium text-amber-800">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            Set variabel <code className="font-mono">ADMIN_PASSWORD</code> di
            Environment Variables Vercel, lalu redeploy untuk mengaktifkan login.
          </div>
        )}

        {state?.error && (
          <div
            role="alert"
            className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {state.error}
          </div>
        )}

        <form action={formAction} className="mt-5 space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-[13px] font-semibold text-[#0a1b33]">
              Password admin
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-[#0a1b33] outline-none transition-colors focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20"
              placeholder="••••••••"
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
