import PropTypes from 'prop-types';

function Image({ alt, background, caption, path }) {
  return (
    <div className="container_image_content" style={{ background }}>
      <figure>
        <div className="image_content">
          <img src={`${import.meta.env.BASE_URL}${path}`} alt={alt} className="image" />
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

export default Image;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
