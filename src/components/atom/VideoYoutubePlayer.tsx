"use client"
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';

interface VideoYoutubePlayerProps {
  url: string;
  className?: string;
  autoplay?: boolean; // Opsi autoplay
}

const VideoYoutubePlayer: React.FC<VideoYoutubePlayerProps> = ({ url, className, autoplay = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Mencegah menu konteks muncul
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      if (container) {
        container.removeEventListener('contextmenu', handleContextMenu);
      }
    };
  }, []);

  // Ekstrak ID video dari URL YouTube
  const getYouTubeID = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/)|youtu\.be\/|youtube\.com\/(?:v=|embed\/|watch\?v=)|youtube\.com\/watch\?v=)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoID = getYouTubeID(url);

  if (!videoID) {
    return <div>Invalid YouTube URL</div>;
  }

  // Tentukan parameter autoplay
  const autoplayParam = autoplay ? '1' : '0';
  const src = `https://www.youtube.com/embed/${videoID}?autoplay=${autoplayParam}&mute=0`; // mute=1 untuk autoplay di banyak browser

  return (
    <div className={cn('', className)} ref={containerRef} style={{ position: 'relative' }}>
      <iframe
        className={cn('w-full h-full')}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoYoutubePlayer;
