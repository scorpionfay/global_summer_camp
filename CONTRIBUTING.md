# Contributing to Global Kids Camp Finder

Thank you for helping parents around the world find great camps for their children!

## Ways to Contribute

### 1. Submit a new camp (no coding needed)
Open a GitHub Issue using the **"Submit a Camp or School"** template. Fill in what you know — we'll do the rest.

### 2. Improve existing data
Found outdated info or a broken link? Open an issue or submit a pull request editing `data/schools.json`.

### 3. Verify a school
Camps marked `"verified": false` haven't been confirmed by a real parent. If you or your child has attended one, open an issue to let us know!

### 4. Improve the website
See `web/` for the Next.js app. Run it locally with:

```bash
cd web
npm install
npm run dev
```

## Data Format (`data/schools.json`)

Each school entry looks like this:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Full School / Camp Name",
  "country": "Japan",
  "city": "Tokyo",
  "region": "Asia",
  "website": "https://...",
  "camp_types": ["summer"],
  "age_min": 3,
  "age_max": 6,
  "duration_options": ["1 week", "2 weeks"],
  "schedule": {
    "summer": { "start": "2026-07-01", "end": "2026-08-31", "notes": "Optional notes" }
  },
  "half_day_available": true,
  "full_day_available": false,
  "languages": ["English", "Japanese"],
  "curriculum_type": "Play-based",
  "price_per_week": { "amount": 500, "currency": "JPY" },
  "contact_email": "",
  "notes": "Any useful notes for parents.",
  "verified": false,
  "last_updated": "2026-03-17"
}
```

**Field guide:**
| Field | Required | Notes |
|---|---|---|
| `id` | Yes | Lowercase, hyphens only, unique |
| `age_min` / `age_max` | Yes | Integer years |
| `camp_types` | Yes | `"summer"` and/or `"winter"` |
| `region` | Yes | One of: Asia, Oceania, Europe, Middle East, North America, South America, Africa |
| `price_per_week.amount` | No | Use `null` if unknown |
| `verified` | — | Set to `true` only if confirmed by a real parent |
| `last_updated` | Yes | ISO date `YYYY-MM-DD` |

## Guidelines
- Only list programs that accept **non-enrolled visiting children** (drop-in for at least 1–2 weeks)
- Minimum age must be **6 or younger** (our focus is toddlers and young children)
- Please do not list programs you have a commercial interest in without disclosing it

## Code of Conduct
Be kind. This is a community built by parents, for parents.
