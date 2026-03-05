export interface PortfolioVideo {
  id: string;
  title: string;
  src: string; // Path to the video file
  thumbnail?: string; // Optional path to a poster image
}

export const videoData: PortfolioVideo[] = [
  {
    id: "vid-1",
    title: "Charcoal Portrait Process",
    src: "/videos/AQMyEqhxe3fsy1OczNSFA1vUpy8SkZxUCGp4m4OfcHT2fOSSV62bSoeJw6ZLyGPId2QaiHx4a3y6vJbSeXygJC7_m9vnTqwE6fiSqp8.mp4",
  },
  {
    id: "vid-2",
    title: "Realistic Details Zoom",
    src: "/videos/AQPbmmE_RrAR7ljGHBrfIgmoOZSBxgTYspxq4NM-VsPv94cpsROng0uAUkswtXJDQAd0KgA8fxYGkDdWUhAyJTjIgm8ArL35h_s27OY.mp4",
  },
  {
    id: "vid-3",
    title: "Graphite Shading Technique",
    src: "/videos/AQMyEqhxe3fsy1OczNSFA1vUpy8SkZxUCGp4m4OfcHT2fOSSV62bSoeJw6ZLyGPId2QaiHx4a3y6vJbSeXygJC7_m9vnTqwE6fiSqp8.mp4",
  },
  {
    id: "vid-4",
    title: "Hyper-realism Eye Sketch",
    src: "/videos/AQNy1S5iaZzalUn1nkDwN97B33KxJeXcLA43Ufvc7h5-FmYq_i4Et6hTrbM8MU4UUZkwXq0m8QwdWB2fnCWgxU5DkIz8_H8lJFzhwOs.mp4",
  },
  {
    id: "vid-5",
    title: "Time-lapse Artwork",
    src: "/videos/AQO3fwhVRrAR7ljGHBrfIgmoOZSBxgTYspxq4NM-VsPv94cpsROng0uAUkswtXJDQAd0KgA8fxYGkDdWUhAyJTjIgm8ArL35h_s27OY.mp4",
  },
  {
    id: "vid-6",
    title: "Final Touches on Portrait",
    src: "/videos/AQPbmmE_4xOsdxdIiXuF0lsNEfUMn1j0pRgOlw7PQYCB_RXP6nrdAET5rtplMPVDT5lzivJvA-Z0K6tYyhYm396MmI5MjuLryhoOrYU.mp4",
  },
  // We omitted the 300MB+ videos (FINAL.mp4, BW FINAL.mp4, vd.mp4) from the default data
  // Those should be hosted on YouTube/Vimeo in production to avoid repo bloat
];
