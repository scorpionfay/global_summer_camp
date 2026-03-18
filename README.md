# 🌍 Global Kids Camp Finder

> A community-sourced directory of short-term international camps and school programs for toddlers and young children — built for travelling parents.

**The idea:** You love to travel internationally. Your child has summer and winter breaks. Instead of staying home, you drop your child off at a local camp or school program for 1–2 weeks while you explore — and they make new friends, learn a language, and experience a new culture too.

---

## Live Site

> Coming soon — deploy your own in minutes (see below).

---

## Countries Covered

| Region | Countries |
|---|---|
| Asia | Japan, Thailand (Bangkok + Chiang Mai), Singapore |
| Oceania | Australia |
| Europe | France, Spain, Italy |
| Middle East | UAE (Dubai) |
| North America | USA, Canada |

More being added — [contribute here](#contributing).

---

## Running Locally

**Requirements:** Node.js 18+

```bash
git clone https://github.com/YOUR_USERNAME/global-summer-camp.git
cd global-summer-camp/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel (free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Set **Root Directory** to `web`
5. Click Deploy — done!

Every time you push to `main`, Vercel auto-deploys.

---

## Contributing

Found a great camp? Know a school not listed here?

- **No coding needed:** [Open an issue](https://github.com/YOUR_USERNAME/global-summer-camp/issues/new?template=submit_school.md) using our "Submit a Camp" template
- **For developers:** Edit `data/schools.json` and open a pull request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full data format guide.

---

## Project Structure

```
global-summer-camp/
├── data/
│   └── schools.json          # All school/camp data — edit this to add entries
├── web/                      # Next.js website
│   ├── src/
│   │   ├── app/              # Pages
│   │   ├── components/       # SchoolCard, FilterBar, SearchBar
│   │   └── lib/              # Data loader + TypeScript types
│   └── package.json
├── .github/
│   └── ISSUE_TEMPLATE/       # "Submit a camp" template for GitHub Issues
├── CONTRIBUTING.md
└── README.md
```

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Data | Flat JSON file (`data/schools.json`) |
| Search | Client-side string filtering |
| Hosting | Vercel (free tier) |

---

## License

MIT — free to use, fork, and build upon.
