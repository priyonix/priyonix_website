"use client";

import { useEffect, useState } from "react";
import { ThreeDMarquee, MediaItem } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const items = [
      
      { src: "/video1.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/design1.jpg", type: "image" as const },
      { src: "/video1.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/design1.jpg", type: "image" as const },
      { src: "/video1.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/design1.jpg", type: "image" as const },
      { src: "/design3.jpg", type: "image" as const },
      //   ----------------------
      { src: "/priyonix2.mp4", type: "video" as const },
      //   ----------------------
      { src: "/design3.jpg", type: "image" as const },
    
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/priyonix2.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/priyonix2.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },

      { src: "/priyonix1.mp4", type: "video" as const },
      { src: "/design3.jpg", type: "image" as const },
      { src: "/priyonix2.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      
      { src: "/priyonix2.mp4", type: "video" as const },
      { src: "/priyonix1.mp4", type: "video" as const },
      { src: "/priyonix2.mp4", type: "video" as const },

      { src: "/video1.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/design1.jpg", type: "image" as const },
      { src: "/priyonix1.mp4", type: "video" as const },
      { src: "/abstract-tech.jpg", type: "image" as const },
      { src: "/priyonix1.mp4", type: "video" as const },

    ];

    const resolved = items.map((item) => ({
      ...item,
      src: new URL(item.src, window.location.origin).href,
    }));

    setMedia(resolved);
  }, []);

  return (
    <div className="mx-auto my-10 w-full rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee media={media} />
    </div>
  );
}
