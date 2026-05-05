import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function MosaicElement({ element, idx, visible }) {
  const { caption, type, path, top, left, width, height, initialOffset } = element;

  const windowWidth = window.innerWidth;
  let style;
  if (windowWidth > 760) {
    style = {
      height,
      left: `calc(50% + ${left}px)`,
      objectFit: 'cover',
      opacity: visible ? 1 : 0,
      position: 'absolute',
      top: `calc(50% + ${top}px)`,
      transform: visible ? 'translate(0, 0)' : `translate(${initialOffset.x}px, ${initialOffset.y}px)`,
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      width
    };
  } else {
    style = {
      left: idx % 2 === 0 ? '-20px' : '20px',
      position: 'relative',
      top: idx > 0 ? `${-idx * 20}px` : '0',
      zIndex: idx % 2 === 0 ? '1' : '2'
    };
  }

  if (type === 'video') {
    return (
      <figure style={style}>
        <video src={path} autoPlay muted playsInline loop>
          <source src={path} type="video/mp4" />
        </video>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure style={style}>
      <img src={path} alt="" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

MosaicElement.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.oneOf(['image', 'video']).isRequired,
    path: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    initialOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  visible: PropTypes.bool.isRequired
};

function Mosaic({ background, elements }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Trigger when mosaic center reaches viewport center
      const centerInView = rect.top < windowH / 2 && rect.bottom > windowH / 2;
      setVisible(centerInView || rect.bottom < windowH / 2);
    };

    if (window.innerWidth > 760) {
      sectionRef.current.style.height = '100vh';
    } else {
      sectionRef.current.style.marginLeft = '40px';
      sectionRef.current.style.marginRight = '40px';
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="container_mosaic_content"
      ref={sectionRef}
      style={{
        background
      }}
    >
      {elements.map((element, i) => (
        <MosaicElement element={element} idx={i} key={element.path} visible={visible} />
      ))}
    </div>
  );
}

Mosaic.propTypes = {
  background: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      initialOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      height: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      top: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Mosaic;
