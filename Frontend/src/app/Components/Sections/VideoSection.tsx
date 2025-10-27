"use client";

import React, { useEffect, useRef, useState } from "react";

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/aSte18D2_YE?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&cc_load_policy=0&controls=1"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const playlistVideos = [
    {
      id: 1,
      title: "AI Workforce Analytics",
      description: "Learn how our AI analyzes workforce patterns",
      videoTitle: "TalentNest Feature Video 1",
      videoId: "9bZkp7q19f0", // Working YouTube video ID
    },
    {
      id: 2,
      title: "Smart Attendance Tracking",
      description: "Automated attendance monitoring system",
      videoTitle: "TalentNest Feature Video 2",
      videoId: "dQw4w9WgXcQ", // Working YouTube video ID
    },
    {
      id: 3,
      title: "Performance Insights",
      description: "Data-driven workforce optimization",
      videoTitle: "TalentNest Feature Video 3",
      videoId: "jNQXAC9IVRw", // Working YouTube video ID
    },
  ];

  const handlePlaylistVideoClick = (videoId: string) => {
    const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&cc_load_policy=0&enablejsapi=1&controls=1`;
    setVideoSrc(newSrc);
    setIsPlaying(true);
  };

  const resetToDefaultVideo = () => {
    const defaultSrc =
      "https://www.youtube.com/embed/aSte18D2_YE?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&cc_load_policy=0&controls=1";
    setVideoSrc(defaultSrc);
    setIsPlaying(true);
  };

  // Function to safely stop the video and hide controls
  const stopVideo = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "stopVideo",
            args: "",
          }),
          "*"
        );
      } catch (error) {
        console.log("Video stopped");
      }
    }
  };

  // Function to restart the default video
  const restartDefaultVideo = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "seekTo",
            args: [0, true],
          }),
          "*"
        );
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "playVideo",
            args: "",
          }),
          "*"
        );
      } catch (error) {
        console.log("Video restart failed");
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only auto-play if it's the default video
            if (videoSrc.includes("aSte18D2_YE")) {
              setVideoSrc(
                "https://www.youtube.com/embed/aSte18D2_YE?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&cc_load_policy=0&controls=1"
              );
              setIsPlaying(true);
            }
          } else {
            // Stop the video completely when leaving the section
            stopVideo();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [videoSrc]);

  // Handle iframe load to detect when video ends
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange") {
          if (data.info === 0) {
            // Video ended
            if (!videoSrc.includes("aSte18D2_YE")) {
              // Playlist video ended, reset to default
              resetToDefaultVideo();
            } else {
              // Default video ended, restart it
              restartDefaultVideo();
            }
          } else if (data.info === 2) {
            // Video paused
            setIsPlaying(false);
          } else if (data.info === 1) {
            // Video playing
            setIsPlaying(true);
          }
        }
      } catch (error) {
        // Not a YouTube API message
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1200px] mx-auto mt-8 mb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="flex justify-center items-center">
        {/* YouTube Video */}
        <div className="relative animate-fade-in-up max-w-4xl w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-light/10 to-teal-medium/10">
            <iframe
              ref={iframeRef}
              src={videoSrc}
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-2xl"
              title="TalentNest Introduction Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Status overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-lg font-semibold">Video Paused</p>
                  <p className="text-sm opacity-80">Click play to continue</p>
                </div>
              </div>
            )}
          </div>

          {/* Control buttons */}
          <div className="flex justify-center mt-4 gap-3">
            <button
              onClick={resetToDefaultVideo}
              className="px-4 py-2 bg-teal-medium text-white text-sm font-medium rounded-lg hover:bg-teal-deep transition-colors duration-200 shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
              Reset to Main Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Playlist - Using thumbnails instead of iframes */}
      <div className="mt-12 relative overflow-hidden max-w-5xl mx-auto">
        <div className="flex animate-scroll-right-to-left">
          {/* Original playlist items */}
          {playlistVideos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <div
                className="group cursor-pointer"
                onClick={() => handlePlaylistVideoClick(video.videoId)}
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-light/10 to-teal-medium/10 transform transition-transform duration-300 group-hover:scale-105">
                  {/* YouTube thumbnail instead of iframe */}
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.videoTitle}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Click to play
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-medium transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {playlistVideos.map((video) => (
            <div
              key={`duplicate-${video.id}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <div
                className="group cursor-pointer"
                onClick={() => handlePlaylistVideoClick(video.videoId)}
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-light/10 to-teal-medium/10 transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.videoTitle}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Click to play
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-medium transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-light/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-teal-medium/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-deep/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-teal-light/30 rounded-full blur-lg animate-bounce"></div>
    </section>
  );
};

export default VideoSection;
