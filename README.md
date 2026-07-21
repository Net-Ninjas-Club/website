# Net Ninjas Junior Badminton Club — Website

Next.js 14 (App Router) + Tailwind CSS, deployed on Vercel, with Airtable powering the
enquiry form and (optionally) the Coaches and Credentials content.

The site works out of the box with the club details already built in as fallback content
— you can launch immediately and connect Airtable whenever you're ready.

## What's in here

- **Hero, story, sessions, coaches, credentials, gallery, join form, footer** — one page,
  built from the details you gave me.
- **Interest form** → `app/api/join/route.ts` → writes a row into an `Enquiries` table in
  Airtable.
- **Coaches & Credentials** are read from Airtable and cached for 5 minutes (see
  `export const revalidate = 300` in `app/page.tsx`), falling back to the content in
  `lib/data.ts` if the tables are empty or Airtable isn't set up yet. That means edits made
  in Airtable appear on the live site within about 5 minutes, with no redeploy needed. Coach
  photos uploaded to the Photo field in Airtable show up automatically too, replacing the
  initials badge.
- **Gallery** looks for image files in `public/images/gallery/` and shows a "photo slot"
  placeholder for any of the 6 spots that don't have one yet.

## 1. Push to GitHub

```bash
cd net-ninjas
git init
git add .
git commit -m "Initial Net Ninjas site"
gh repo create net-ninjas --private --source=. --push
# or create the repo on github.com and: git remote add origin <url> && git push -u origin main
```

## 2. Set up Airtable

Create a new base called **Net Ninjas** with three tables:

### Enquiries (required — this is where the join form writes to)
| Field | Type |
|---|---|
| Parent/Guardian Name | Single line text |
| Child Name | Single line text |
| Age / Year Group | Single line text |
| Email | Email |
| Phone | Phone number |
| Preferred Session | Single line text |
| Message | Long text |
| Submitted At | Date (with time) |

### Coaches (optional — lets you edit coach info without touching code)
| Field | Type |
|---|---|
| Name | Single line text |
| Roles | Single line text — comma-separated, e.g. `Assistant Coach, First Aider` |
| Bio | Long text |
| Photo | Attachment |
| Order | Number — controls display order |

### Credentials (optional)
| Field | Type |
|---|---|
| Title | Single line text |
| Holder | Single line text |
| Issuer | Single line text |
| Belt | Single select — options: `white`, `yellow`, `orange`, `green`, `blue`, `brown`, `black` |

Then create an API token at [airtable.com/create/tokens](https://airtable.com/create/tokens)
with `data.records:read` and `data.records:write` scopes on this base, and grab your Base
ID from the base's API documentation page (Help → API documentation).

> **Note:** I've seeded sensible starting content for Coaches and Credentials in
> `lib/data.ts` based on what you told me. A couple of the credential entries (coaching
> qualifications, DBS checks, first aid certificate type) are placeholders I've inferred —
> please check and correct these in Airtable (or in `lib/data.ts`) before publishing, since
> these are safeguarding-related claims that need to be accurate.

## 3. Deploy on Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Add two environment variables in Project Settings → Environment Variables:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
3. Deploy. Vercel will run `npm install` and `next build` automatically.
4. Point your domain (e.g. via IONOS, same as your other sites) at Vercel — Project
   Settings → Domains will give you the DNS records to add.

## 4. Add real photos and sponsor logos

Drop JPG/PNG/WEBP files into `public/images/gallery/` (up to 6 will show) — name them
however you like, they're picked up automatically, sorted alphabetically.

Drop sponsor logos into `public/images/sponsors/`, named to match the slug in
`lib/data.ts` (e.g. `badminton-england.png`, `sport-england.svg`) — PNG, SVG, JPG and WEBP
are all picked up automatically. Any sponsor without a matching file shows an "add logo"
placeholder instead. Commit and push to update the live site.

## 5. Google Tag Manager, Analytics & Search Console

The site is already wired up to load Google Tag Manager (GTM) — you just need a container ID.

1. Create a free GTM account at [tagmanager.google.com](https://tagmanager.google.com), and
   a container for `netninjas.club` — this gives you an ID like `GTM-XXXXXXX`.
2. In Vercel → Settings → Environment Variables, add:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
   (Production environment ticked, same as the Airtable variables.)
3. Redeploy.
4. **Google Analytics (GA4):** create a GA4 property at
   [analytics.google.com](https://analytics.google.com), grab its Measurement ID
   (`G-XXXXXXX`), then inside GTM create a new tag → "Google Analytics: GA4 Configuration"
   → paste the Measurement ID → trigger "All Pages" → publish the GTM container. No further
   code changes needed — this is all configured inside GTM's own dashboard.
5. **Google Search Console:** at
   [search.google.com/search-console](https://search.google.com/search-console), add
   `netninjas.club` as a property. The easiest verification method here is usually "HTML
   tag" — Search Console gives you a meta tag, which can be added the same way as GTM: as a
   tag inside GTM itself ("Custom HTML" tag, fires on all pages), or, if you'd rather not
   route it through GTM, ask for it to be added directly to `app/layout.tsx`'s `metadata`
   export (`verification: { google: 'xxxxxxxx' }`).

**Important:** GTM does not load automatically for every visitor — it only fires once someone
clicks "Accept" on the cookie banner (see section 6 below). This is required under UK PECR,
since GA4 sets non-essential analytics cookies. Testing GTM's Preview mode will only connect
once you've accepted cookies on the live site yourself.

## 6. Cookie consent & legal pages

- **Cookie banner** (`app/components/CookieConsent.tsx`) shows on first visit, offering
  Accept/Reject. The choice is stored in the visitor's browser (`localStorage`), and GTM
  (`app/components/GTMLoader.tsx`) only loads if they accepted.
- Visitors can change their mind anytime via the **"Cookie Settings"** link in the footer,
  which reopens the banner.
- **`/privacy`** and **`/cookies`** are real pages on the site (linked from the footer and the
  cookie banner) with a first draft of a Privacy Policy and Cookie Policy already written in
  `app/privacy/page.tsx` and `app/cookies/page.tsx`.

> **This isn't a substitute for legal advice.** The policy text is a reasonable starting
> point, not something a lawyer has reviewed. Given the site collects children's information
> via the enquiry form, it's worth having these checked by a solicitor or a service like the
> ICO's own guidance (ico.org.uk) before fully relying on them — particularly the data
> retention wording, which is intentionally generic and should be tightened to reflect what
> the club actually does in practice.

Once GTM, GA4 and Search Console are all publishing/verified, you'll have traffic and search
performance data flowing without touching the site's code again for future tracking changes
— new tags, pixels, or conversion events can all be added inside the GTM dashboard directly.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your Airtable keys
npm run dev
```

Visit `http://localhost:3000`. Without Airtable keys set, the site still runs fully using
the fallback content, but the join form will show an error until Airtable is connected.

## Editing club details

- **Coaches, credentials, session times, Facebook link** → `lib/data.ts` (or Airtable, for
  Coaches/Credentials).
- **Colours** → `tailwind.config.ts` (`ember`, `chalk`, `ink`, `steel` — pulled from your
  logo).
- **Copy/wording** → the component files in `app/components/`.

## Media inventory — every image/file on the site, and how to update each one

There are three different patterns in use, depending on the image:

**A. Drop any file into a folder — no code change needed**
| What | Where | Notes |
|---|---|---|
| Gallery photos ("From the Hall") | `public/images/gallery/` | Any JPG/PNG/WEBP, any filename. Up to 6 shown, sorted alphabetically. Empty slots show a placeholder. |
| Sponsor logos | `public/images/sponsors/` | Filename must match the slug in `lib/data.ts` exactly, e.g. `sport-england.png`. PNG/SVG/JPG/WEBP all work. |

**B. Edit in Airtable — live within ~5 minutes, no push needed**
| What | Where |
|---|---|
| Coach photos | Airtable → Coaches table → Photo field (attachment) |

**C. Specific filename, referenced directly in the code — replacing the file (same name, same location) is enough, no code edit required; renaming it *does* require a one-line code change**
| What | File | Used in |
|---|---|---|
| Club badge/logo (header + browser tab icon) | `public/images/logo.jpg` (also copied to `app/icon.jpg` for the favicon) | `app/components/Header.tsx` |
| Hero section photo | `public/images/hero-action.jpg` | `app/components/Hero.tsx` |
| "Our Story" founders photo | `public/images/founders.jpg` | `app/components/Story.tsx` |
| Player Leadership photo | `public/images/player-leadership.jpg` | `app/components/Coaches.tsx` |
| Safeguarding policy PDF | `public/documents/badminton-england-safeguarding-policy.pdf` | `app/components/Credentials.tsx` (via `lib/data.ts`) |

For the type-C items: if you keep the exact same filename, you can just overwrite the file in
your local project folder and push — no code changes needed. If you want to rename it or add
a genuinely new photo in a new spot, that's a small code edit (updating the `src` path in the
relevant component), which is the kind of change Webdog Marketing can help with, or any
developer working from this repo.
