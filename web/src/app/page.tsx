"use client";

import { useState, useMemo } from "react";
import { getSchools, getCountries, getRegions } from "@/lib/schools";
import type { CampType, Region } from "@/lib/types";
import SchoolCard from "@/components/SchoolCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { Globe2 } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState<Region | "">("");
  const [campType, setCampType] = useState<CampType | "">("");
  const [childAge, setChildAge] = useState(3);

  const countries = useMemo(() => getCountries(), []);
  const regions = useMemo(() => getRegions(), []);

  const results = useMemo(
    () =>
      getSchools({
        search,
        country,
        region,
        campType,
        ageMax: childAge,
      }),
    [search, country, region, campType, childAge]
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-3">
          <Globe2 size={36} className="text-orange-500" />
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Global Kids Camp Finder
          </h1>
        </div>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Find short-term international camps &amp; school programs for toddlers and kids worldwide —
          so travelling parents can explore the world while children learn, play, and make friends.
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Filters */}
      <div className="mb-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <FilterBar
          countries={countries}
          regions={regions}
          selectedCountry={country}
          selectedRegion={region}
          selectedCampType={campType}
          childAge={childAge}
          onCountryChange={setCountry}
          onRegionChange={(v) => setRegion(v as Region | "")}
          onCampTypeChange={setCampType}
          onAgeChange={setChildAge}
        />
      </div>

      {/* Results count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-800">{results.length}</span> program
          {results.length !== 1 ? "s" : ""} for age {childAge}
        </p>
        <a
          href="https://github.com/YOUR_USERNAME/global-summer-camp/issues/new?template=submit_school.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          + Submit a camp
        </a>
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🌍</p>
          <p className="text-lg font-semibold">No programs found</p>
          <p className="text-sm mt-1">Try adjusting your filters or search term.</p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-400">
        Open-source community project.{" "}
        <a
          href="https://github.com/YOUR_USERNAME/global-summer-camp"
          className="underline hover:text-gray-600"
        >
          Contribute on GitHub
        </a>{" "}
        · Data last updated March 2026.
      </footer>
    </main>
  );
}
