# 🧠 Personalized Content Dashboard

A full-featured, customizable content dashboard built with **Next.js**, **TypeScript**, and **Redux Toolkit**.  
It intelligently fetches **news**, **movie recommendations**, and supports **dark mode**, **search**, **preferences**, and even **drag-and-drop UI** — all in one responsive interface.

---

## 🔗 Live Demo

🚀 [Visit the Live App](https://personalized-dashboard-7qqqw6hve-raghus-projects-1dccba79.vercel.app/)  

---

## ✨ Features

- 🔄 Personalized **News Feed** based on user-selected categories
- 🔍 **Debounced Search** to filter content live
- 🎬 **Movie Recommendations** via TMDB API
- ☀️🌙 **Dark/Light Mode Toggle**
- 🧠 **User Preferences Panel** saved via Redux + Local Storage
- 🧩 **Drag and Drop** support using `@hello-pangea/dnd`
- ⚡ Blazing-fast UI with **Tailwind CSS + Next.js**
- 📱 **Fully Responsive** layout (mobile to desktop)

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- Hello-Pangea DnD
- News API + TMDB API
- Vercel Deployment

---

## 🧩 Folder Structure


├── components/
│ ├── Layout.tsx
│ ├── NewsFeed.tsx
│ ├── Recommendations.tsx
│ └── SettingsPanel.tsx
├── pages/
│ ├── index.tsx
│ └── api/news.ts
├── store/
│ ├── index.ts
│ └── preferencesSlice.ts
├── utils/
│ ├── fetchNews.ts
│ └── fetchTMDB.ts




---

## 🧪 Getting Started Locally

1. Clone the repo  
   ```bash
   git clone https://github.com/RaghuSharma14/personalized-dashboard.git
   cd personalized-dashboard

2. Install dependencies
   npm install

3. Create a .env.local file at the root with:

   NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key

4. Run the app
   npm run dev

5. Visit: http://localhost:3000


🧠 How It Works
Categories selected in the SettingsPanel update the global Redux state.

NewsFeed fetches personalized articles using those categories via /api/news.

Recommendations pulls trending movies from TMDB.

Search term is debounced to reduce unnecessary API calls.

State is synced with Local Storage and persists on reload.

🧑 Author
Raghu Sharma
B.Tech CSE, 2025 Graduate


📦 Deployment
This project is deployed via Vercel:
🌐 https://personalized-dashboard-7qqqw6hve-raghus-projects-1dccba79.vercel.app/










