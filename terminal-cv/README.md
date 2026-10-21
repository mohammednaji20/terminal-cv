# Mohammed Naji — Interactive CV Terminal 💻

A terminal/CLI-style interactive CV landing page. Visitors "log in" to a fake shell
and explore the CV by typing commands like `help`, `skills`, `projects`…

**English + Arabic (RTL)** — switch with the `عربي / EN` button or the `lang ar` / `lang en` command.

## ✨ Features

- Real-looking terminal: prompt, command history (↑/↓), Tab autocomplete
- Commands: `whoami`, `about`, `skills`, `projects`, `project 1..3`, `education`,
  `languages`, `interests`, `objective`, `contact`, `links`, `cv`, `date`, `history`,
  `banner`, `clear`, `lang`
- Hidden easter eggs: `sudo`, `sudo hire mohammed`, `hack`, `coffee`, `exit`
- RTL support for Arabic with an Arabic-friendly font
- Quick-access chips for mobile visitors
- Pure HTML/CSS/JS — no build step, no dependencies

## 🚀 Deploy on GitHub Pages

1. Create a new repository (for example `terminal-cv`).
2. Upload **all files in this folder** (`index.html`, `style.css`, `terminal.js`, `data.js`)
   to the repository root (the `main` branch).
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → `main` → `/ (root)` → **Save**.
5. After ~1 minute your page will be live at:

   `https://mohammednaji20.github.io/<repo-name>/`

> Tip: to serve it at `https://mohammednaji20.github.io` directly (no suffix),
> put the files in a repo named `mohammednaji20.github.io`.

## 🖥️ Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## 📁 Files

```
index.html    page structure
style.css     terminal theme (CRT scanlines, glow, RTL support)
terminal.js   shell engine: commands, history, autocomplete, i18n
data.js       all CV content in English & Arabic — edit this to update the CV
```
