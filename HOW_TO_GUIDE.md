# Portfolio Website Guide

Welcome to your new premium portfolio website! This guide will help you manage your artworks, videos, and deploy the website.

## 1. How to Add New Artworks

Artworks are managed in the `src/data/galleryData.ts` file.

1. **Add Images:**
   Place your new artwork images in the `public/gallery/` folder.
   _Example: `public/gallery/my-new-drawing-1.jpg`_

2. **Update Data:**
   Open `src/data/galleryData.ts` and add a new entry to the `galleryData` array:

   ```typescript
   {
     id: "unique-id-here",            // Make sure this is unique
     title: "Name of your artwork",  // Title shown in gallery
     category: "Pencil",             // Must be "Pencil", "Charcoal", or "Realistic Sketch"
     images: [
       "/gallery/my-new-drawing-1.jpg",
       "/gallery/my-new-drawing-2.jpg" // Add more if you have different angles
     ],
     featured: false                 // Set to true if you want to feature it later
   }
   ```

## 2. How to Add New Reel Videos

Videos are managed in the `src/data/videoData.ts` file.
_Note: Vercel has a 100MB limit for free tier. For large videos, we strongly recommend uploading them to YouTube/Vimeo and embedding them._

1. **Add Video:**
   Place your new video file in the `public/videos/` folder.
   _Example: `public/videos/new-reel.mp4`_

2. **Update Data:**
   Open `src/data/videoData.ts` and add a new entry to the `videoData` array:

   ```typescript
   {
     id: "unique-video-id",
     title: "Title of your video",
     src: "/videos/new-reel.mp4",
     // Optional: Add a custom thumbnail image (must be placed in public/gallery or public/videos first)
     // thumbnail: "/gallery/thumbnail.jpg"
   }
   ```

## 3. SEO Optimization

Your website already includes built-in SEO optimizations:

- Google Fonts are optimized
- Images use Next.js `next/image` component for automatic compression and lazy loading
- Semantic HTML tags are used for better screen reader and search engine parsing
- Metadata is configured in `src/app/layout.tsx`

**To update global SEO settings:**
Open `src/app/layout.tsx` and update the `metadata` object with your preferred title, description, and OpenGraph details.

## 4. Deployment to Vercel

Vercel is the creator of Next.js and the best place to host this website.

1. **Push code to GitHub:**
   - Create a new repository on GitHub.
   - Push your local code to the repository.

2. **Deploy on Vercel:**
   - Go to [Vercel.com](https://vercel.com/) and sign in with GitHub.
   - Click "Add New..." -> "Project".
   - Import your GitHub repository.
   - Leave all build settings as default (Framework Preset: Next.js).
   - Click **Deploy**.

Within minutes, your site will be live! Any future pushes to your main branch on GitHub will automatically deploy to your live website.
