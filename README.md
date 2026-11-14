# KIP 700 Install Guide (PWA)

Mobile install guide for the KIP 700 Series (KIP 730/740), built from Setup Guides 1-4 (Ver. A.4).
Static site: no build step, no backend, no database.

## Files
- `index.html` : the whole app (steps, warnings, tables, logic)
- `img/` : the 228 manual pages (g1-01.jpg ... g4-32.jpg). Each step links to its page.
- `sw.js`, `manifest.webmanifest`, `icon-*.png` : offline support + "Add to Home screen"
- `vercel.json` : caching headers

## Deploy (Windows)
Replace the <PLACEHOLDERS> with your own values.

1. Install Git for Windows (https://git-scm.com) if not installed.
2. On GitHub create a NEW repository named `kip700-guide`, set it to **Private**. Do not add a README.
3. Open PowerShell in this folder (Shift + right-click in the folder > "Open PowerShell window here") and run:

       git init
       git add .
       git commit -m "KIP 700 install guide"
       git branch -M main
       git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/kip700-guide.git
       git push -u origin main

4. Go to https://vercel.com/new, sign in with GitHub, **Import** the `kip700-guide` repo.
5. Framework Preset: **Other**. Leave Build Command and Output Directory EMPTY. Click **Deploy**.
6. Open the URL Vercel gives you (https://kip700-guide-<random>.vercel.app) on the phone.

## On the phone (before going to the branch)
1. Open the URL once with signal.
2. Ref tab > **Save all figures for offline** (about 17 MB).
3. Browser menu > **Add to Home screen**. It then opens like an app, even with no signal.

## Updating
Edit files, then `git add . && git commit -m "update" && git push`. Vercel redeploys automatically.
If a phone shows old content, reopen the app online once.

## Notes
- Progress and readings are stored only in the browser on that phone (localStorage). Clearing browser data erases them. Use "Copy report" in the My log tab to save a copy.
- Figures are matched to steps automatically by page. The page label (e.g. "G1 p.27") is the manual's own page number; use Prev/Next in the viewer if a step's picture is on the neighbouring page.
- The manuals are (c) Katsuragawa Electric Co., Ltd. Keep the repo PRIVATE and share the URL only with your team/partner.
