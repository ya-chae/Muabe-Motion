import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { DemoItem } from './Demo';

interface VideoModalProps {
  demo: DemoItem;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ demo, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLandscapeVideo, setIsLandscapeVideo] = useState(false);
  const [viewportOrientation, setViewportOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const videoRef = useRef<HTMLVideoElement>(null);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(demo.videoUrl);
  const isYouTube = !!youtubeId;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    const updateOrientation = () => {
      setViewportOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  const handleMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight, duration } = videoRef.current;
      setIsLandscapeVideo(videoWidth / videoHeight >= 1.0);
      setDuration(duration);
      if (videoRef.current.readyState >= 2) setIsLoading(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const shouldRotate = viewportOrientation === 'portrait' && isLandscapeVideo && !isYouTube;
  const youtubeEmbedUrl = isYouTube 
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`
    : '';

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/98 backdrop-blur-[40px] transition-opacity duration-700 ease-out" />

      <div 
        className={`
          relative z-[70] bg-surface border-border-subtle shadow-[0_64px_160px_rgba(0,0,0,1)]
          flex flex-col overflow-hidden transition-all duration-500 ease-out
          ${shouldRotate 
            ? 'fixed-rotation-layout' 
            : `rounded-[20px] sm:rounded-[36px] md:rounded-[40px] border max-h-[95vh] sm:max-h-[92vh]
               ${isLandscapeVideo || isYouTube 
                 ? 'w-full lg:w-[1340px] lg:max-w-[92vw] aspect-auto' 
                 : 'w-auto max-w-[92vw] h-full lg:h-[88vh]'
               }`
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - Optimized for PC (Slimmer) */}
        <div className={`
          flex justify-between items-center shrink-0 z-[80]
          ${shouldRotate 
            ? 'px-12 py-6 absolute top-0 left-0 right-0 bg-transparent pointer-events-none' 
            : 'sm:relative px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-5 sm:bg-bg-1/50 border-b border-white/5 absolute top-0 left-0 right-0 bg-transparent pointer-events-none sm:pointer-events-auto'
          }
        `}>
          <div className="flex-1 pr-6 hidden sm:block">
            <p className="text-accent font-black uppercase tracking-[0.25em] text-[9px] sm:text-[10px] md:text-[11px] mb-0.5 opacity-90">
              {demo.title}
            </p>
            <h3 className="text-text-1 font-extrabold tracking-tight text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-tight break-keep">
              {demo.subtitle}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className={`
              rounded-full flex items-center justify-center bg-white/10 hover:bg-accent text-text-1 hover:text-white transition-all duration-300 shrink-0 shadow-2xl active:scale-90 pointer-events-auto backdrop-blur-md
              ${shouldRotate ? 'w-12 h-12 ml-auto' : 'w-10 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 ml-auto'}
            `}
            aria-label="Close"
          >
            <X size={18} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Video Area - Maximized */}
        <div className="flex-grow relative bg-black flex items-center justify-center overflow-hidden min-h-0">
          {(isLoading && !isYouTube) && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
              <div className="w-12 h-12 border-[3px] border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {isYouTube ? (
            <div className="w-full h-full p-0 flex items-center justify-center">
              <div className="w-full h-full relative shadow-2xl overflow-hidden aspect-video">
                <iframe
                  className="w-full h-full absolute inset-0"
                  src={youtubeEmbedUrl}
                  title={demo.subtitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className={`relative w-full h-full flex items-center justify-center p-0`}>
              <video 
                ref={videoRef}
                src={demo.videoUrl}
                className={`
                  max-w-full max-h-full object-contain pointer-events-auto cursor-pointer shadow-2xl transition-opacity duration-300 w-full h-full
                  ${isLoading ? 'opacity-0' : 'opacity-100'}
                `}
                onLoadedMetadata={handleMetadata}
                onCanPlay={() => setIsLoading(false)}
                onPlaying={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                playsInline
                autoPlay
                preload="auto"
              />
            </div>
          )}
        </div>

        {/* Controls Bar - Slimmer for PC */}
        {!isYouTube && (
          <div className={`
            hidden sm:flex bg-surface/80 backdrop-blur-md border-t border-white/5 flex-col shrink-0
            ${shouldRotate ? 'px-12 py-4 gap-3' : 'px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 gap-2 sm:gap-3'}
          `}>
            <div className="relative group w-full flex items-center h-4">
              <input 
                type="range"
                min="0"
                max={duration || 0}
                step="0.01"
                value={currentTime}
                onChange={handleSeek}
                className="
                  w-full h-1 sm:h-1.5 appearance-none bg-white/10 rounded-full outline-none cursor-pointer
                  accent-accent transition-all group-hover:h-2
                "
                style={{
                  background: `linear-gradient(to right, #FF3B4D ${ (currentTime / duration) * 100 || 0 }%, rgba(255,255,255,0.1) ${ (currentTime / duration) * 100 || 0 }%)`
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 sm:gap-8">
                <button 
                  onClick={togglePlay}
                  className="text-text-1 hover:text-accent transition-all duration-300 transform active:scale-90"
                >
                  {isPlaying ? <Pause size={20} className="sm:w-6 sm:h-6" /> : <Play size={20} className="sm:w-6 sm:h-6 fill-current" />}
                </button>
                
                <div className="flex items-center gap-4 text-text-2 font-black font-mono text-[12px] md:text-[14px]">
                  <span className="text-text-1">{formatTime(currentTime)}</span>
                  <span className="opacity-20">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center">
                <button 
                  onClick={toggleMute}
                  className="text-text-1 hover:text-accent transition-all duration-300 transform active:scale-90"
                >
                  {isMuted ? <VolumeX size={18} className="sm:w-5 sm:h-5" /> : <Volume2 size={18} className="sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          border: 2px solid #FF3B4D;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(255, 59, 77, 0.4);
        }
        @media (min-width: 640px) {
          input[type='range']::-webkit-slider-thumb {
            width: 14px;
            height: 14px;
            border-width: 3px;
          }
        }

        @media (max-width: 1024px) and (orientation: portrait) {
          .fixed-rotation-layout {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 100vh !important;
            height: 100vw !important;
            transform: translate(-50%, -50%) rotate(90deg);
            border: none;
            border-radius: 0;
            z-index: 100;
            display: flex;
            flex-direction: column;
            background: #000;
            max-width: none !important;
            max-height: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default VideoModal;