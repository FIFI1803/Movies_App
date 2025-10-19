## Quick overview

# Popcorn Time

This is a small, responsive React + Vite app for searching and browsing movies using The Movie Database (TMDB) and tracking trending searches with Appwrite.

This repository is a frontend application built with React, Vite and Tailwind CSS. It queries the TMDB REST API for movie data and uses Appwrite for storing simple analytics (search counts) and a trending list.

## Quick overview

- Framework: React (functional components + hooks)
- Tooling: Vite
- Styling: Tailwind CSS
- External services:
  - TMDB API for movie data and images
  - Appwrite for storing search counts and retrieving trending movies

## Features

- Search movies by title (debounced input)
- Browse a discovery list when no search term is provided
- View trending movies based on search counts stored in Appwrite
- Simple, responsive UI with movie cards and loading states

## Requirements

- Node 16+ (recommended)
- A TMDB API key
- An Appwrite project with a database and collection configured (optional — trending/search analytics will fallback silently if Appwrite is not configured)

## Environment variables

Create a file named `.env.local` in the project root with the following variables (Vite uses the VITE_ prefix):

VITE_API_KEY=your_tmdb_api_key_here

If you want to use Appwrite features (recommended for trending searches), add:

VITE_APPWRITE_ENDPOINT=https://YOUR_APPWRITE_ENDPOINT/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

Notes:
- Do not commit secret keys to source control.
- The app will show a friendly error message if `VITE_API_KEY` is missing.

## Install and run

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Available npm scripts (from `package.json`):
- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview the production build
- `lint` — run ESLint

## How it works (brief)

- `src/App.jsx` contains the main UI and logic. It reads `VITE_API_KEY` from the environment and fetches movies from TMDB. When a user searches, the app makes a TMDB search request; when no query is provided it falls back to a discover endpoint.
- Search input is debounced (using `react-use`), and successful search requests also call `updateSearchCount` in `src/appwrite.js` which stores/increments search counts in Appwrite.
- `getTrendingMovies` (in `src/appwrite.js`) reads the top results from Appwrite and the app renders them at the top of the UI.

If Appwrite environment variables are not present or Appwrite calls fail, the app logs errors but remains usable (search and discovery via TMDB still work).

## Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry
- `src/App.jsx` — Main application component and data fetching
- `src/appwrite.js` — Appwrite client helpers (updateSearchCount, getTrendingMovies)
- `src/components/Search.jsx` — Search input component
- `src/components/MovieCard.jsx` — Movie card renderer
- `src/components/Spinner.jsx` — Loading spinner
- `src/index.css` / `tailwind.config.cjs` — Tailwind configuration and global styles

## Debugging & troubleshooting

- If you see "Missing API key" in the UI, confirm `VITE_API_KEY` is set in `.env.local` and restart the dev server.
- If TMDB images are broken, check how poster URLs are composed (`https://image.tmdb.org/t/p/w500/${poster_path}`) and confirm the movie object contains `poster_path`.
- Appwrite errors are logged to the console; confirm endpoint and project/database/collection IDs, and that CORS/permissions are configured on your Appwrite instance.

## Tests

There are no automated tests included. For UI testing, consider adding React Testing Library and Jest or Playwright for E2E flows.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch
3. Open a PR with a clear description

Please run the linter and test the app locally before opening a PR.

## License

No license file is included. If you'd like this project to be open source, add a LICENSE file (MIT is common) or tell me which license to add and I can create it.

## Contact

Repo: https://github.com/FIFI1803/Movies_App

If anything in this README is incorrect or you'd like a version with additional examples (for example a `.env.example`, a sample Appwrite seed script, or GitHub Actions deploy), tell me and I will add it.
# Movies App

A small, responsive React + Vite app to search and browse movies using The Movie Database (TMDB) and to track trending searches with Appwrite.

This repository is a frontend application built with React, Vite and Tailwind CSS. It queries the TMDB REST API for movie data and uses Appwrite for storing simple analytics (search counts) and a trending list.

## Quick overview

- Framework: React (functional components + hooks)
- Tooling: Vite
- Styling: Tailwind CSS
- External services:
  - TMDB API for movie data and images
  - Appwrite for storing search counts and retrieving trending movies

## Features

- Search movies by title (debounced input)
- Browse a discovery list when no search term is provided
- View trending movies based on search counts stored in Appwrite
- Simple, responsive UI with movie cards and loading states

## Requirements

- Node 16+ (recommended)
- A TMDB API key
- An Appwrite project with a database and collection configured (optional — trending/search analytics will fallback silently if Appwrite is not configured)

## Environment variables

Create a file named `.env.local` in the project root with the following variables (Vite uses the VITE_ prefix):

VITE_API_KEY=your_tmdb_api_key_here

If you want to use Appwrite features (recommended for trending searches), add:

VITE_APPWRITE_ENDPOINT=https://YOUR_APPWRITE_ENDPOINT/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

Notes:
- Do not commit secret keys to source control.
- The app will show a friendly error message if `VITE_API_KEY` is missing.

## Install and run

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Available npm scripts (from `package.json`):
- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview the production build
- `lint` — run ESLint

## How it works (brief)

- `src/App.jsx` contains the main UI and logic. It reads `VITE_API_KEY` from the environment and fetches movies from TMDB. When a user searches, the app makes a TMDB search request; when no query is provided it falls back to a discover endpoint.
- Search input is debounced (using `react-use`), and successful search requests also call `updateSearchCount` in `src/appwrite.js` which stores/increments search counts in Appwrite.
- `getTrendingMovies` (in `src/appwrite.js`) reads the top results from Appwrite and the app renders them at the top of the UI.

If Appwrite environment variables are not present or Appwrite calls fail, the app logs errors but remains usable (search and discovery via TMDB still work).

## Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry
- `src/App.jsx` — Main application component and data fetching
- `src/appwrite.js` — Appwrite client helpers (updateSearchCount, getTrendingMovies)
- `src/components/Search.jsx` — Search input component
- `src/components/MovieCard.jsx` — Movie card renderer
- `src/components/Spinner.jsx` — Loading spinner
- `src/index.css` / `tailwind.config.cjs` — Tailwind configuration and global styles

## Debugging & troubleshooting

- If you see "Missing API key" in the UI, confirm `VITE_API_KEY` is set in `.env.local` and restart the dev server.
- If TMDB images are broken, check how poster URLs are composed (`https://image.tmdb.org/t/p/w500/${poster_path}`) and confirm the movie object contains `poster_path`.
- Appwrite errors are logged to the console; confirm endpoint and project/database/collection IDs, and that CORS/permissions are configured on your Appwrite instance.

## Tests

There are no automated tests included. For UI testing, consider adding React Testing Library and Jest or Playwright for E2E flows.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch
3. Open a PR with a clear description

Please run the linter and test the app locally before opening a PR.

## License

No license file is included. If you'd like this project to be open source, add a LICENSE file (MIT is common) or tell me which license to add and I can create it.

## Contact

Repo: https://github.com/FIFI1803/Movies_App

If anything in this README is incorrect or you'd like a version with additional examples (for example a `.env.example`, a sample Appwrite seed script, or GitHub Actions deploy), tell me and I will add it.
