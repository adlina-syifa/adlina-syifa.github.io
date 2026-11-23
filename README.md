# Putri Dyra — Data Analyst Portfolio (GitHub Pages)

A responsive, animated personal portfolio inspired by the *editorial/interactive* structure of the user's reference site. This is an original implementation, not a copy of its source code or visual assets.

## View locally

Open `index.html` in a browser, or use VS Code → Live Server. No framework, build tooling, or install needed. Internet is only required for the optional Google Fonts; fallback fonts work offline.

## Important edits BEFORE publishing

1. In `index.html`, replace `mailto:YOUR_EMAIL@example.com` with your real professional address.
2. Replace `https://www.linkedin.com/` with your personal LinkedIn URL.
3. Update the internship dates, university name, and graduation year after verifying them.
4. Check every project description against the work you actually performed. The third project is explicitly an **illustrative concept** and must be replaced with a real completed project to claim it as experience.
5. Illustrative images use mock/synthetic designs and should never be passed off as actual BSI dashboard screenshots. Never publish identifiable client, employee, internal company or bank data without permission.
6. Optionally add links to public GitHub repositories, PDFs or sanitized Power BI screenshots in the project cards.

## Publish on GitHub Pages

1. Create/login to a GitHub account.
2. Create a **public** repository with the *exact* name `YOUR_USERNAME.github.io` (replace `YOUR_USERNAME` with your GitHub username).
3. Upload the **contents** of this folder (`index.html`, `style.css`, and `script.js`) to the repository root; do not upload them inside a nested folder.
4. Open repository **Settings → Pages**, select **Deploy from a branch**, Branch **main**, Folder **/(root)**, and Save.
5. When GitHub finishes deploying, visit `https://YOUR_USERNAME.github.io/`.

GitHub Pages hosting and settings may evolve; see official documentation: https://docs.github.com/en/pages/quickstart

## Optional customization

- Accent color: change `--lime` in `style.css`.
- Background color: change `--bg` in `style.css`.
- Project content: edit the `<article class="project-card">` sections in `index.html`.
- Animation wording: edit the `words` array in `script.js`.
- SEO metadata: edit the `<title>` and `<meta name="description">` tags.
