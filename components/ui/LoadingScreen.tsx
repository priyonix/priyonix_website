'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000); // ⏳ 4 seconds (adjust to 6000 for 6s)
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex flex-col items-center justify-center">
      <Image
        src="/LOGO_PRIYONIX_1.png"
        alt="Priyonix Logo"
        width={200}
        height={200}
        className="animate-logoFade"
      />
      <p className="text-white text-lg mt-6 animate-pulse">Loading...</p>
    </div>
  );
}

    //   <video
    //     src="/priyonix-intro.mp4"
    //     autoPlay
    //     muted
    //     playsInline
    //     className="w-48 h-48 object-contain animate-fadeIn"
    //   />
