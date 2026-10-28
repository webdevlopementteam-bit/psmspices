"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Loads the YouTube IFrame API once and resolves with window.YT.
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
}

// Muted, looping YouTube background. The poster stays on top until the video
// is actually playing, so the player's black loading screen is never visible.
export default function HeroVideo({ videoId, poster }) {
  const wrapperRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let player;
    let timer;
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled) return;
      // YT.Player replaces its target node, so give it one React doesn't own.
      const target = document.createElement("div");
      wrapperRef.current.appendChild(target);
      player = new YT.Player(target, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
          },
          onStateChange: (e) => {
            // Wait a moment past PLAYING so the first decoded frame is on screen.
            if (e.data === YT.PlayerState.PLAYING) {
              timer = setTimeout(() => setPlaying(true), 300);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      player?.destroy();
      if (wrapperRef.current) wrapperRef.current.innerHTML = "";
    };
  }, [videoId]);

  return (
    <section className="relative min-h-[280px] overflow-hidden bg-[#3a2a1e] md:min-h-[560px]">
      <div
        ref={wrapperRef}
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 left-1/2 aspect-video min-h-full w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`pointer-events-none object-cover transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
    </section>
  );
}
