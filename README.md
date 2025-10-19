# Movies App

A lightweight, responsive Movies web app built with plain JavaScript, CSS, and HTML. Movies App lets users discover movies, search by title, view details, and save favorites — all in a small, dependency-free frontend.

Live demo: (If you host the project, add the URL here)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Option A — Open directly](#option-a---open-directly)
  - [Option B — Serve locally (recommended)](#option-b---serve-locally-recommended)
  - [Option C — Using npm scripts (if present)](#option-c---using-npm-scripts-if-present)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About

Movies App is a small single‑page application (SPA) that shows movie data and details. It's implemented with vanilla JavaScript (no frameworks), CSS for styling and responsiveness, and plain HTML. The project is a great starting point for learning frontend basics (fetch API, DOM manipulation, responsive design) and for building features like bookmarking and local persistence.

## Features

- Browse a list of movies (popular / trending)
- Search movies by title
- View movie details (overview, release date, rating, poster)
- Add / remove favorites (stored in localStorage)
- Responsive layout for mobile and desktop
- Lightweight, dependency-free frontend

## Tech Stack

- JavaScript (ES6+)
- HTML5
- CSS3 (Flexbox / Grid for layout)
- Optional: The Movie Database (TMDB) API or any REST movie API for data

Based on your usage, you may replace or extend the data source.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: Node.js and npm if you want to serve the project with a local dev server or use scripts

## Getting Started

Clone the repository:

git clone https://github.com/FIFI1803/Movies_App.git
cd Movies_App

There are multiple easy ways to run the app locally.

### Option A - Open directly

1. Open the project folder.
2. Double-click `index.html` (or open it in the browser).  
   Note: Some browsers restrict fetch requests when opening files via the `file://` protocol. If you see CORS or network errors, use a local server (Option B).

### Option B - Serve locally (recommended)

Use a lightweight HTTP server to avoid fetch/CORS limitations:

- With npx http-server:
  npx http-server . -o

- With npm package `serve`:
  npm install -g serve
  serve .

This will open the app in your browser at http://localhost:5000 (port may vary).

### Option C - Using npm scripts (if present)

If the repository includes a package.json with scripts, run:

npm install
npm start

(Adjust according to scripts defined in the project.)

## Configuration

This app may use a third‑party movie API (for example TMDB). If the code expects an API key, configure it as follows:

1. Create a file named `config.js` in the project root (or follow the repo's existing pattern).
2. Add the API key (example for TMDB):
   // config.js
   const MOVIE_API_KEY = 'YOUR_API_KEY_HERE';

3. Save and reload the app.

If the project already uses a `.env` or another config method, follow that pattern instead.

Important: Do not commit secret API keys to public repositories. Use environment variables or GitHub Secrets for production deployments.

## Usage

- Search: Type a movie title in the search field and press Enter or click Search.
- Browse: The homepage shows a list of movies (popular / recommended).
- Details: Click a movie card to open the details view (overview, release date, rating).
- Favorites: Click the "Add to favorites" or star icon; favorites are stored in localStorage and persist between sessions.
- Remove favorites: In the favorites view, remove movies you no longer want.

Customize the UI by editing `styles.css` or the relevant CSS files.

## Project Structure (example)

The actual project layout may vary. A typical structure:

- index.html — main HTML file
- css/
  - styles.css — global styles
- js/
  - app.js — main JavaScript
  - api.js — functions for API calls
  - ui.js — DOM helpers and rendering
  - storage.js — localStorage helpers for favorites
- assets/
  - images/ — logos, placeholders
- config.js — (optional) API key or runtime config

Adjust to match this repo's real structure.

## Testing

There are no automated tests included by default. To test manually:

- Verify search results return expected movies.
- Add/remove favorites and refresh — favorites should persist.
- Resize the browser to confirm responsive layout.
- Check network panel for API requests and handle errors.

To add unit or integration tests (optional), consider Jest or Playwright for E2E tests.

## Troubleshooting

- Blank page / errors in console:
  - Open DevTools (F12) and check console for errors or missing files.
  - If fetch fails, ensure you're serving over HTTP (use Option B) or check API key validity.
- API rate limits:
  - Public movie APIs often limit requests. Add caching or reduce query frequency.
- Images not loading:
  - Verify the image URL pattern from the API. TMDB uses base image URLs; ensure you compose full poster URLs correctly.

## Contributing

Contributions welcome! Recommended workflow:

1. Fork the repo.
2. Create a branch: git checkout -b feat/my-feature
3. Make changes, test locally.
4. Commit: git commit -m "Add feature"
5. Push: git push origin feat/my-feature
6. Open a Pull Request describing the change.

Please open issues or PRs with clear descriptions and steps to reproduce.

## License

If you want to apply a license, add a LICENSE file. Common choice:

MIT License — see LICENSE file for details.

(If you want me to add a LICENSE file to this repository, tell me which license to use and I can create it.)

## Contact

Repository: https://github.com/FIFI1803/Movies_App

Author: FIFI1803

If you have questions, open an issue on the repo and I’ll get back to you.

## Acknowledgements

- The Movie Database (TMDB) for movie data and images (if used)
- Any design or icon libraries that are included with the project

---

If you’d like, I can:
- Add an example config.js and .env.example
- Create a CONTRIBUTING.md or LICENSE file
- Add a deploy workflow (GitHub Pages or Netlify) with instructions

Tell me which you'd like and I’ll prepare the files and a PR. 