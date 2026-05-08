import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function Video({ background, caption, path, path_square, poster, poster_square, subtitles }) {
  const sectionRef = useRef(null);
  const videoContentRef = useRef(null);
  const videoRef = useRef(null);
  const controlRef = useRef(null);
  const videoOverlayRef = useRef(null);
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
      const videoOverlay = videoOverlayRef.current;
      const control = controlRef.current;
      if (!section || !video) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH / 2) / 2;
      setOpacity(progress);
      if (progress >= 1 && progress <= 1.9) {
        video.play();
        videoOverlay.style.borderColor = '#000';
        videoOverlay.style.borderWidth = 0;
        control.style.opacity = 1;
        setCurrentBackground('#000');
      } else if (progress > 1.9) {
        video.pause();
        control.style.opacity = 0;
        setCurrentBackground(background);
      } else if (progress < 1) {
        video.pause();
        videoOverlay.style.borderColor = '#111';
        videoOverlay.style.borderLeftWidth = '70px';
        videoOverlay.style.borderRightWidth = '70px';
        videoOverlay.style.borderTopWidth = '100px';
        videoOverlay.style.borderBottomWidth = '100px';
        control.style.opacity = 0;
        setCurrentBackground(background);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [background]);

  return (
    <div className="container_video_content" ref={sectionRef} style={{ backgroundColor: currentBackground }}>
      <figure>
        <div className="video_content" ref={videoContentRef} style={{ backgroundColor: currentBackground }}>
          <div className="video_wrapper">
            <div className="video_overlay" ref={videoOverlayRef}></div>
            <video loop muted playsInline preload="auto" ref={videoRef} src={window.innerWidth > 600 ? path : path_square} poster={window.innerWidth > 600 ? poster : poster_square} style={{ opacity }}>
              <source src={window.innerWidth > 600 ? path : path_square} type="video/mp4" />
              {subtitles !== '' && <track label="Finnish" kind="subtitles" srcLang="fi" src={subtitles} />}
            </video>
            <figcaption>{caption}</figcaption>
            {/* Sound toggle button */}
            <div ref={controlRef}>
              <button
                aria-label="Äänet päälle / pois"
                onClick={toggleMute}
                style={{
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '40px',
                  justifyContent: 'center',
                  outline: 'none',
                  pointerEvents: 'auto',
                  position: 'absolute',
                  right: '1rem',
                  top: '1rem',
                  transition: 'opacity 2s ease, border-color 0.2s ease',
                  width: '40px',
                  zIndex: 2
                }}
                type="button"
              >
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>Unmute</title>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>Mute</title>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}

Video.propTypes = {
  background: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  path_square: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  poster_square: PropTypes.string.isRequired,
  subtitles: PropTypes.string.isRequired
};

export default Video;
