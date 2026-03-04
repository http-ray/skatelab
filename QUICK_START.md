# 🚀 Quick Start Guide

## Running the Project

### 1️⃣ Start Development Server
```bash
npm run dev
```
**→ Open:** http://localhost:3000

### 2️⃣ Build for Production
```bash
npm run build
npm start
```

### 3️⃣ Run Linting
```bash
npm run lint
```

---

## 📍 Key URLs

- **Home**: http://localhost:3000
- **Flatground**: http://localhost:3000/category/flatground
- **Example Trick**: http://localhost:3000/trick/kickflip

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| [app/page.tsx](app/page.tsx) | Home page - category tiles |
| [app/category/[id]/page.tsx](app/category/[id]/page.tsx) | Category pages - trick lists |
| [app/trick/[id]/page.tsx](app/trick/[id]/page.tsx) | Trick viewer - 3D model |
| [data/tricks.ts](data/tricks.ts) | **Add new tricks here** |
| [components/TrickViewer.tsx](components/TrickViewer.tsx) | **3D model component** |
| [store/useTrickStore.ts](store/useTrickStore.ts) | Global state management |

---

## 🎨 Custom Tailwind Classes

Use these in your components:

```jsx
<div className="game-card">...</div>
<button className="game-button">...</button>
```

---

## 🔧 Common Tasks

### Add a New Trick
1. Open [data/tricks.ts](data/tricks.ts)
2. Add to the `tricks` array:
   ```typescript
   {
     id: 'new-trick',
     name: 'New Trick',
     category: 'flatground',
     difficulty: 'intermediate',
     description: 'Description here',
     variations: ['Variation 1'],
   }
   ```
3. Save - it will auto-appear!

### Add a 3D Model
1. Place `.glb` or `.gltf` file in `/public/models/`
2. Update trick in [data/tricks.ts](data/tricks.ts):
   ```typescript
   modelPath: '/models/kickflip.glb'
   ```
3. Modify [components/TrickViewer.tsx](components/TrickViewer.tsx) to load the model

### Change Colors/Theme
Edit [tailwind.config.ts](tailwind.config.ts) or [app/globals.css](app/globals.css)

---

## 📚 Tech Stack Quick Reference

| Technology | Docs |
|------------|------|
| Next.js | https://nextjs.org/docs |
| React Three Fiber | https://docs.pmnd.rs/react-three-fiber |
| Framer Motion | https://www.framer.com/motion/ |
| Tailwind CSS | https://tailwindcss.com/docs |
| Zustand | https://docs.pmnd.rs/zustand |

---

## ✨ Features

- ✅ 20 pre-loaded tricks across 4 categories
- ✅ Interactive 3D visualization
- ✅ Stance & direction controls
- ✅ Game-style menu animations
- ✅ Fully responsive design
- ✅ TypeScript type safety
- ✅ Production-ready build

---

**View full documentation:** [README.md](README.md)  
**Project overview:** [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)
