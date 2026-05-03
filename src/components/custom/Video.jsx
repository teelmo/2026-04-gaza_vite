import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Video({ background, path, poster }) {
  const sectionRef = useRef(null);
  const videoContentRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const controlRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(background);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const video = videoRef.current;
      const videoWrapper = videoWrapperRef.current;
      const control = controlRef.current;
      if (!section || !video) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH / 2) / 2;
      setOpacity(progress);
      if (progress >= 1 && progress <= 1.9) {
        video.play();
        videoWrapper.style.transform = 'scaleX(1) scaleY(1)';
        control.style.opacity = 1;
        setCurrentBackground('#000');
      } else if (progress > 1.9) {
        video.pause();
        control.style.opacity = 0;
        setCurrentBackground(background);
      } else if (progress < 1) {
        video.pause();
        videoWrapper.style.transform = 'scaleX(0.8) scaleY(1.2)';
        control.style.opacity = 0;
        setCurrentBackground(background);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [background]);

  return (
    <div className="container_video_content" ref={sectionRef} style={{ backgroundColor: currentBackground }}>
      <div className="video_content" ref={videoContentRef} style={{ backgroundColor: currentBackground }}>
        <div className="video_wrapper" ref={videoWrapperRef}>
          <video
            loop
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            src={path}
            poster={poster}
            style={{ opacity }}
          />
          {/* Sound toggle button */}
          <div ref={controlRef}>
            <button
              aria-label="Toggle mute"
              onClick={toggleMute}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 2s ease, border-color 0.2s ease',
                pointerEvents: 'auto',
              }}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  background: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Video;