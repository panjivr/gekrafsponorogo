import { MapPin, Tag } from "lucide-react";
import type { EventItem } from "@/lib/types";
import { dateParts, formatDateID } from "@/lib/format";

export default function EventCard({ event }: { event: EventItem }) {
  const { day, month } = dateParts(event.starts_at);
  return (
    <div className="group flex h-full gap-5 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.18)]">
      <div
        className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl text-white"
        style={{ background: `linear-gradient(135deg, ${event.accent}, ${event.accent}cc)` }}
      >
        <span className="font-stat text-[28px] font-bold leading-none">{day}</span>
        <span className="mt-0.5 text-[12px] font-semibold uppercase tracking-wide">{month}</span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {event.status === "upcoming" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00aeef]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0087d1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00aeef]" />
              Akan datang
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <Tag className="h-3 w-3" />
            {event.subsector}
          </span>
        </div>
        <h3 className="mt-2 font-display text-[16px] font-semibold leading-snug text-[#0a1b33]">
          {event.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
          {event.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-slate-500">
          <span className="font-medium text-[#0a1b33]">{formatDateID(event.starts_at)}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
