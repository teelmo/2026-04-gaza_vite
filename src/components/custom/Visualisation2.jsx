import React, { useRef, useEffect, useState } from 'react';

const total = 21000;
const ageGroups = [
  { label: 'Vauvat', count: 500 },
  { label: 'Alle 1-vuotiaat', count: 1000 },
  { label: 'Alle 5-vuotiaat', count: 5000 },
  { label: '5–17-vuotiaat', count: 14500 }
];
const dotRadius = 1.5;
const dotPadding = 3;
const animationDuration = 1500;
// const organisedOpacity = 0.9;
const organisedRadius = 1.5;

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function Visualisation2() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animFrameRef = useRef(null);
  const animStartRef = useRef(null);
  const organizedRef = useRef(false);
  const columnPositionsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [organized, setOrganized] = useState(false);

  const textProgress = Math.min(Math.max((scrollProgress - 0.1) / 0.4, 0), 1);
  const textY = 100 - textProgress * 200;
  const textOpacity = textProgress < 0.1 ? textProgress / 0.1 : textProgress > 0.8 ? 1 - (textProgress - 0.8) / 0.2 : 1;

  useEffect(() => {
    function drawDots() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      });
    }
    const canvas = canvasRef.current;
    canvas.width = Math.min(window.innerWidth, 1350);
    canvas.height = window.innerHeight;
    const w = canvas.width;
    const h = canvas.height;

    const randomX = d3.randomNormal(w / 2, w / 5);
    const randomY = d3.randomNormal(h / 2, h / 5);

    const dots = [];
    while (dots.length < total) {
      const x = randomX();
      const y = randomY();
      if (x > 40 && x < w - 40 && y > 40 && y < h - 40) {
        const opacity = Math.random() * 0.5 + 0.3;
        const r = Math.random() * dotRadius + 0.5;
        dots.push({
          x,
          y,
          targetX: x,
          targetY: y,
          startX: x,
          startY: y,
          r,
          randomR: r,
          opacity,
          randomOpacity: opacity
        });
      }
    }
    dotsRef.current = dots;
    drawDots();
  }, []);

  useEffect(() => {
    function calculateTargets(w, h) {
      const totalCols = ageGroups.length;
      const columnGap = 20;
      const totalGap = columnGap * (totalCols - 1);
      const usableWidth = w - totalGap;
      const colWidth = usableWidth / (totalCols + 1);

      let dotIndex = 0;
      let currentX = (w - (colWidth * totalCols + totalGap)) / 2;
      columnPositionsRef.current = [];

      ageGroups.forEach(group => {
        const dotsPerRow = Math.floor(colWidth / dotPadding);
        const rows = Math.ceil(group.count / dotsPerRow);
        const totalHeight = rows * dotPadding;
        const startY = h / 2 + totalHeight / 2;
        const colCenterX = currentX + colWidth / 2;

        columnPositionsRef.current.push({
          x: colCenterX,
          y: h / 2 - totalHeight / 2
        });

        for (let i = 0; i < group.count; i++) {
          const col = i % dotsPerRow;
          const row = Math.floor(i / dotsPerRow);

          // Base grid position
          const baseX = colCenterX - (dotsPerRow * dotPadding) / 2 + col * dotPadding;
          const baseY = startY - row * dotPadding;

          // Random offset — more horizontal than vertical to keep column shape
          const jitterX = (Math.random() - 0.5) * dotPadding * 2.5;
          const jitterY = (Math.random() - 0.5) * dotPadding * 1.5;

          dotsRef.current[dotIndex].targetX = baseX + jitterX;
          dotsRef.current[dotIndex].targetY = baseY + jitterY;
          dotIndex++;
        }

        currentX += colWidth + columnGap;
      });
    }
    function animateToTargets(toOrganized) {
      dotsRef.current.forEach(dot => {
        dot.startX = dot.x;
        dot.startY = dot.y;
        dot.startOpacity = dot.opacity;
        dot.startR = dot.r;
      });

      animStartRef.current = performance.now();

      function frame(now) {
        const elapsed = now - animStartRef.current;
        const t = Math.min(elapsed / animationDuration, 1);
        const eased = easeInOut(t);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dotsRef.current.forEach(dot => {
          dot.x = dot.startX + (dot.targetX - dot.startX) * eased;
          dot.y = dot.startY + (dot.targetY - dot.startY) * eased;

          const targetOpacity = dot.randomOpacity;
          const targetR = toOrganized ? organisedRadius : dot.randomR;
          dot.opacity = dot.startOpacity + (targetOpacity - dot.startOpacity) * eased;
          dot.r = dot.startR + (targetR - dot.startR) * eased;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
          ctx.fill();
        });

        if (t < 1) {
          animFrameRef.current = requestAnimationFrame(frame);
        } else {
          setOrganized(toOrganized);
        }
      }

      animFrameRef.current = requestAnimationFrame(frame);
    }
    const handleScroll = () => {
      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const progress = -top / (height - window.innerHeight);
      const clamped = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clamped);

      if (clamped >= 0.5 && !organizedRef.current) {
        organizedRef.current = true;
        calculateTargets(canvasRef.current.width, canvasRef.current.height);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        animateToTargets(true);
      }

      if (clamped < 0.5 && organizedRef.current) {
        organizedRef.current = false;
        setOrganized(false);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        dotsRef.current.forEach(dot => {
          dot.targetX = dot.startX;
          dot.targetY = dot.startY;
        });
        animateToTargets(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container_visualisation_content" style={{ height: '350vh' }} ref={containerRef}>
      <div className="visualisation_content">
        <canvas ref={canvasRef} />

        <div className="container_scrolling_text" style={{ opacity: textOpacity, transform: `translateY(${textY}%)` }}>
          <p>21 000 lasta kuoli Gazan sodassa</p>
        </div>

        {organized &&
          ageGroups.map((group, i) => {
            const pos = columnPositionsRef.current[i];
            if (!pos) return null;
            return (
              <div key={group.label} className="container_age_group" style={{ top: pos.y - 65, left: pos.x }}>
                <div>
                  <strong>{group.count.toLocaleString('fi-FI')}</strong>
                </div>
                <div>{group.label}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Visualisation2;
