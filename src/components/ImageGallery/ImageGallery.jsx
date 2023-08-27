import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from '../../css/styles.module.css';

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={styles.ImageGallery}>
    {images.map(element => (
      <ImageGalleryItem
        key={element.id}
        item={element}
        onClickImage={onClickImage}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
