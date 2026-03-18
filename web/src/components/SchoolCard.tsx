"use client";

import type { School } from "@/lib/types";
import { Globe, MapPin, Users, Clock, Languages, BookOpen } from "lucide-react";

const FLAG: Record<string, string> = {
  Japan: "🇯🇵",
  Thailand: "🇹🇭",
  Singapore: "🇸🇬",
  Australia: "🇦🇺",
  France: "🇫🇷",
  Spain: "🇪🇸",
  Italy: "🇮🇹",
  UAE: "🇦🇪",
  USA: "🇺🇸",
  Canada: "🇨🇦",
};

export default function SchoolCard({ school }: { school: School }) {
  const flag = FLAG[school.country] ?? "🌍";
  const priceLabel =
    school.price_per_week.amount
      ? `${school.price_per_week.currency} ${school.price_per_week.amount.toLocaleString()} / week`
      : "Price on request";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-2xl mr-2">{flag}</span>
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mr-1">
            {school.country}
          </span>
          {school.camp_types.map((t) => (
            <span
              key={t}
              className={`inline-block text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full mr-1 ${
                t === "summer"
                  ? "bg-yellow-50 text-yellow-700"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        {school.verified && (
          <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
            ✓ Verified
          </span>
        )}
      </div>

      {/* Name & City */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 leading-tight">{school.name}</h2>
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
          <MapPin size={13} />
          {school.city}
        </p>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-1.5 text-gray-600">
          <Users size={14} className="text-orange-400 shrink-0" />
          <span>Ages {school.age_min}–{school.age_max}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Clock size={14} className="text-orange-400 shrink-0" />
          <span>{school.duration_options.join(", ")}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Languages size={14} className="text-orange-400 shrink-0" />
          <span>{school.languages.join(", ")}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <BookOpen size={14} className="text-orange-400 shrink-0" />
          <span>{school.curriculum_type}</span>
        </div>
      </div>

      {/* Half/Full day badges */}
      <div className="flex gap-2 text-xs">
        {school.half_day_available && (
          <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">Half-day ✓</span>
        )}
        {school.full_day_available && (
          <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full font-medium">Full-day ✓</span>
        )}
      </div>

      {/* Notes */}
      {school.notes && (
        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-2">{school.notes}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        <span className="text-sm font-semibold text-gray-700">{priceLabel}</span>
        <a
          href={school.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          <Globe size={14} />
          Visit site
        </a>
      </div>
    </div>
  );
}
