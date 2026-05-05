import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function MapImage({ map1, map2, texts, points }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const lineEnd = 0.95; // Line finishes at 95% of total scroll, last 5% is frozen
  const phaseSize = 1 / texts.length;
  const lineStart = phaseSize * 1 - phaseSize * 0.5;

  const map1Opacity = Math.max(1 - Math.max(scrollProgress - (phaseSize * 2 - phaseSize * 0.5), 0) / 0.05, 0);
  const map2Opacity = Math.min(Math.max((scrollProgress - (phaseSize - phaseSize * 0.5)) / 0.05, 0), 1);
  const lineProgress = Math.min(Math.max((scrollProgress - lineStart) / (lineEnd - lineStart), 0), 1);

  // Map dimensions
  const mapWidth = Math.min(dimensions.width, 1350);
  const mapHeight = (mapWidth * 1110) / 1350;
  const mapLeft = (dimensions.width - mapWidth) / 2;
  const mapTop = (dimensions.height - mapHeight) / 2;
  const canvasWidth = mapWidth;
  const canvasHeight = mapHeight;

  // Text opacity helper — fades in then out within each phase
  const textOpacity = progress => (progress < 0.1 ? progress / 0.1 : progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1);

  const toPixel = useCallback(
    point => ({
      x: (point.x / 100) * canvasWidth,
      x_text: (point.x / 100 + 0.02) * canvasWidth,
      y: (point.y / 100) * canvasHeight,
      y_text: (point.y / 100) * canvasHeight
    }),
    [canvasWidth, canvasHeight]
  );

  const pixelPoints = useMemo(() => (dimensions.width ? points.map(toPixel) : []), [dimensions.width, points, toPixel]);

  // Draw canvas
  useEffect(() => {
    const controlPoint = (p1, p2) => ({
      x: (p1.x + p2.x) / 2 + (p2.y - p1.y) * 0.2,
      y: (p1.y + p2.y) / 2 - (p2.x - p1.x) * 0.2
    });
    if (!dimensions.width || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixelPoints.forEach((point, i) => {
      if (i === 0 || i === pixelPoints.length - 1) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    });

    if (lineProgress === 0) return;

    ctx.strokeStyle = 'rgba(255, 80, 0, 0.9)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Instead of drawnLength based on distance, use segment progress
    const drawnSegments = lineProgress * (pixelPoints.length - 1);

    // In the draw loop
    for (let i = 0; i < pixelPoints.length - 1; i++) {
      const segmentProgress = Math.min(Math.max(drawnSegments - i, 0), 1);
      if (segmentProgress === 0) break;

      const p1 = pixelPoints[i];
      const p2 = pixelPoints[i + 1];
      const cp = controlPoint(p1, p2);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);

      if (segmentProgress >= 1) {
        ctx.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
      } else {
        const t = segmentProgress;
        const endX = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * cp.x + t * t * p2.x;
        const endY = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cp.y + t * t * p2.y;
        ctx.quadraticCurveTo((1 - t) * p1.x + t * cp.x, (1 - t) * p1.y + t * cp.y, endX, endY);
      }
      ctx.stroke();
    }

    pixelPoints.forEach((point, i) => {
      if (drawnSegments >= i || (i === 0 && drawnSegments > 0)) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#ff623e';
        ctx.fill();
      }
      pixelPoints.forEach((point, i) => {
        if (i === 0 || i === pixelPoints.length - 1) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = '#ff623e';
          ctx.fill();
        }
      });
    });
  }, [lineProgress, dimensions, pixelPoints]);

  // Size canvas
  useEffect(() => {
    const w = Math.min(window.innerWidth, 1350);
    const h = (w * 1110) / 1350;
    const canvas = canvasRef.current;
    canvas.width = w;
    canvas.height = h;
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Size canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    pixelPoints.forEach((point, i) => {
      if (i === 0 || i === pixelPoints.length - 1) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    });
  }, [pixelPoints]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const progress = -top / (height - window.innerHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mapStyle = {
    height: mapHeight,
    left: mapLeft,
    top: mapTop,
    width: mapWidth
  };
  return (
    <div ref={containerRef} style={{ background: scrollProgress > 0 ? 'linear-gradient(to bottom, #111, #000 50%, #111)' : '#111' }} className="container_map_content">
      <div className="map_content">
        <img src={map1} alt="" style={{ ...mapStyle, opacity: map1Opacity }} />
        <img src={map2} alt="" style={{ ...mapStyle, opacity: map2Opacity }} />
        <canvas ref={canvasRef} style={{ left: mapLeft, top: mapTop }} />
        {/* Texts */}
        {texts.map((content, i) => {
          const phaseStart = i * phaseSize + phaseSize * 0.25;
          const phaseProgress = Math.min(Math.max((scrollProgress - phaseStart) / phaseSize, 0), 1);
          const textY = 100 - phaseProgress * 200;
          return (
            <div className="container_scrolling_text" key={content.text} style={{ opacity: textOpacity(phaseProgress), transform: `translateY(${textY}%)` }}>
              <p>
                <span className="title">{content.title}</span> <span className="text">{content.text}</span>
              </p>
            </div>
          );
        })}
        {/* Points */}
        {pixelPoints.map((point, i) => {
          const drawnSegments = lineProgress * (pixelPoints.length - 1);
          const reached = (drawnSegments >= i && map1Opacity < 0.5) || i === 0 || i === pixelPoints.length - 1;
          if (points[i].label_pos === 'right') {
            return (
              <div className="container_label_text right" key={points[i].y} style={{ top: mapTop + point.y, left: mapLeft + point.x_text, opacity: reached ? 1 : 0 }}>
                {points[i].label}
              </div>
            );
          }
          return (
            <div className="container_label_text center" key={points[i].y} style={{ top: mapTop + point.y, left: mapLeft + point.x, opacity: reached ? 1 : 0 }}>
              {points[i].label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

MapImage.propTypes = {
  map1: PropTypes.string.isRequired,
  map2: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MapImage;
