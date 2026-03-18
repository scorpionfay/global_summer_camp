export type CampType = "summer" | "winter";
export type Region = "Asia" | "Oceania" | "Europe" | "Middle East" | "North America" | "South America" | "Africa";

export interface SessionInfo {
  start: string | null;
  end: string | null;
  notes?: string;
}

export interface School {
  id: string;
  name: string;
  country: string;
  city: string;
  region: Region;
  website: string;
  camp_types: CampType[];
  age_min: number;
  age_max: number;
  duration_options: string[];
  schedule: Partial<Record<CampType, SessionInfo>>;
  half_day_available: boolean;
  full_day_available: boolean;
  languages: string[];
  curriculum_type: string;
  price_per_week: { amount: number | null; currency: string };
  contact_email: string;
  notes: string;
  verified: boolean;
  last_updated: string;
}
