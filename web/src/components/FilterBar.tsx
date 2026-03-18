"use client";

import type { CampType, Region } from "@/lib/types";

interface FilterBarProps {
  countries: string[];
  regions: string[];
  selectedCountry: string;
  selectedRegion: string;
  selectedCampType: CampType | "";
  childAge: number;
  onCountryChange: (v: string) => void;
  onRegionChange: (v: string) => void;
  onCampTypeChange: (v: CampType | "") => void;
  onAgeChange: (v: number) => void;
}

const CAMP_TYPES: { value: CampType | ""; label: string }[] = [
  { value: "", label: "All seasons" },
  { value: "summer", label: "☀️ Summer" },
  { value: "winter", label: "❄️ Winter" },
];

export default function FilterBar({
  countries,
  regions,
  selectedCountry,
  selectedRegion,
  selectedCampType,
  childAge,
  onCountryChange,
  onRegionChange,
  onCampTypeChange,
  onAgeChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 items-end">
      {/* Region */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Region</label>
        <select
          value={selectedRegion}
          onChange={(e) => {
            onRegionChange(e.target.value);
            onCountryChange(""); // reset country when region changes
          }}
          className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <option value="">All regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <option value="">All countries</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Camp type */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Season</label>
        <div className="flex gap-2">
          {CAMP_TYPES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onCampTypeChange(value)}
              className={`px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                selectedCampType === value
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Child age */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Child&apos;s age: <span className="text-orange-600">{childAge} yrs</span>
        </label>
        <input
          type="range"
          min={1}
          max={16}
          value={childAge}
          onChange={(e) => onAgeChange(Number(e.target.value))}
          className="w-36 accent-orange-500"
        />
      </div>
    </div>
  );
}
