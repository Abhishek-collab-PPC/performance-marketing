# GitHub Setup Instructions

## Option A: Push via Git (using a Personal Access Token)

1. Go to https://github.com/settings/tokens/new
2. Create a token with `repo` scope
3. Run these commands in your terminal (on your local machine):

```bash
# Download the code first - export from this sandbox
# OR clone from the sandbox

# Then push to your GitHub
git remote add origin https://Abhishek-collab-PPC:YOUR_TOKEN@github.com/Abhishek-collab-PPC/performance-marketing.git
git push -u origin main
```

## Option B: GitHub Pages via GitHub Web UI

1. Create repo at: https://github.com/new
   - Owner: Abhishek-collab-PPC
   - Name: performance-marketing
   - Public ✓
   - Do NOT initialize with README

2. Upload the `docs/` folder contents to the repo

3. Go to Settings → Pages → Source: Deploy from branch → Branch: main, /docs

Your site will be live at:
**https://abhishek-collab-ppc.github.io/performance-marketing/**

