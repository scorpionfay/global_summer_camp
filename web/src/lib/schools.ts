import type { School, CampType, Region } from "./types";
import rawData from "../../../data/schools.json";

export const allSchools: School[] = rawData as School[];

export function getSchools({
  search = "",
  country = "",
  region = "" as Region | "",
  campType = "" as CampType | "",
  ageMax = 99,
}: {
  search?: string;
  country?: string;
  region?: Region | "";
  campType?: CampType | "";
  ageMax?: number;
}): School[] {
  let results = allSchools;

  if (country) {
    results = results.filter((s) => s.country === country);
  }

  if (region) {
    results = results.filter((s) => s.region === region);
  }

  if (campType) {
    results = results.filter((s) => s.camp_types.includes(campType));
  }

  // Filter so the camp accepts the given age
  if (ageMax < 99) {
    results = results.filter((s) => s.age_min <= ageMax);
  }

  if (search.trim()) {
    const q = search.toLowerCase();
    results = results.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.curriculum_type.toLowerCase().includes(q) ||
        s.notes.toLowerCase().includes(q)
    );
  }

  return results;
}

export function getCountries(): string[] {
  return [...new Set(allSchools.map((s) => s.country))].sort();
}

export function getRegions(): Region[] {
  return [...new Set(allSchools.map((s) => s.region))].sort() as Region[];
}
