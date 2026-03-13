# Sync this website to GitHub (separate project)

This repo contains **only** the MagmaLink website (Astro, copy, docs). It is separate from enrichment pipeline and other GTM Hub work.

---

## 1. GitHub MCP (optional, for future use)

We don't currently have a GitHub MCP in this Cursor project. To add it:

1. Open **Cursor Settings** (Ctrl+Shift+J).
2. Go to **Tools & MCP**.
3. Search for **GitHub** and add the GitHub MCP server.
4. You’ll need a [GitHub Personal Access Token](https://github.com/settings/tokens) with `repo` scope; add it when the MCP asks.

After that, you can create repos, manage issues/PRs, and push from Cursor via the MCP.

---

## 2. Sync this folder to a new GitHub repo (using Git)

Git was not available in the environment used to prepare this, so these steps are for you to run locally.

### 2.1 Install Git (if needed)

- Download: https://git-scm.com/download/win  
- Or install **GitHub Desktop**: https://desktop.github.com (includes Git and a simple UI).

### 2.2 Create a new repo on GitHub

1. Go to https://github.com/new  
2. **Repository name:** e.g. `magmalink-website` or `magmalink.com`  
3. **Public**, no README / no .gitignore (we already have them here)  
4. Click **Create repository**

### 2.3 Turn this folder into a Git repo and push

Open a terminal in this folder (`GTM Hub/MagmaLink/website`). Then:

```bash
git init
git add .
git commit -m "Initial commit: MagmaLink website and docs"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and the repo name you chose (e.g. `magmalink-website`).

- If GitHub asks for auth, use a [Personal Access Token](https://github.com/settings/tokens) as the password, or sign in with **GitHub CLI** (`gh auth login` then `gh repo create ...` if you prefer).

### 2.4 Optional: create repo and push in one go (GitHub CLI)

If you have [GitHub CLI](https://cli.github.com/) installed and logged in:

```bash
cd "path/to/GTM Hub/MagmaLink/website"
git init
git add .
git commit -m "Initial commit: MagmaLink website and docs"
gh repo create magmalink-website --public --source=. --remote=origin --push
```

---

## 3. What’s included in this repo

- `src/` — Astro pages, layouts, content, styles  
- `public/` — Favicon, logos  
- `docs/` — Brand and messaging (e.g. MAGMALINK_CORE_MESSAGING.md)  
- `README.md` — Project overview and run/build instructions  
- `.gitignore` — Excludes `node_modules/`, `dist/`, `.astro/`, `.env`

So the repo is **website + docs only**, isolated from enrichment pipeline and other projects.

---

Once the first push is done, you’ll see the project on GitHub and can connect it to Vercel/Netlify for deployment or use the GitHub MCP from Cursor for future changes.
