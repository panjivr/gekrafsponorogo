"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, ChevronRight } from "lucide-react";
import { registerMember, type RegisterState } from "@/app/actions/register";
import { subsectors } from "@/lib/content";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-[#0a1b33] placeholder:text-slate-400 outline-none transition-colors focus:border-[#00aeef] focus:ring-2 focus:ring-[#00aeef]/20";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-[#0a1b33]";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a152d] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(10,21,45,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Mengirim…
        </>
      ) : (
        <>
          Kirim Pendaftaran
          <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
        </>
      )}
    </button>
  );
}

export default function RegisterForm() {
  const [state, formAction] = useActionState<RegisterState, FormData>(
    registerMember,
    null
  );

  if (state?.ok) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-[#00aeef]/30 bg-[#00aeef]/[0.06] p-8 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#00aeef] text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-[20px] font-semibold text-[#0a1b33]">
          Pendaftaran terkirim
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-slate-600">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state && !state.ok && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nama lengkap <span className="text-[#00aeef]">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Nama kamu" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#00aeef]">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="nama@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            No. WhatsApp <span className="text-[#00aeef]">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="08xxxxxxxxxx" />
        </div>
        <div>
          <label htmlFor="district" className={labelClass}>
            Kecamatan / Domisili <span className="text-[#00aeef]">*</span>
          </label>
          <input id="district" name="district" required className={fieldClass} placeholder="cth. Babadan" />
        </div>
      </div>

      <div>
        <label htmlFor="subsector" className={labelClass}>
          Subsektor keahlian <span className="text-[#00aeef]">*</span>
        </label>
        <select id="subsector" name="subsector" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Pilih subsektor…
          </option>
          {subsectors.map((s) => (
            <option key={s.no} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Pesan / portofolio singkat
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="Ceritakan singkat tentang karya/usaha kreatifmu (opsional)"
        />
      </div>

      <p className="text-[12px] leading-relaxed text-slate-400">
        Dengan mendaftar, kamu menyetujui pembinaan calon anggota dan menaati AD/ART GEKRAFS.
      </p>

      <SubmitButton />
    </form>
  );
}
