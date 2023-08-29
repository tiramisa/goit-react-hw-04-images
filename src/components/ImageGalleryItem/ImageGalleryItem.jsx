import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../../css/styles.module.css';

Modal.setAppElement('#root');

const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { id, webformatURL, largeImageURL, tags } = item;

  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />

      <Modal
        className={styles.Modal}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <img src={largeImageURL} alt={tags} />
        <button className={styles.ModalButton} onClick={closeModal}>
          x
        </button>
      </Modal>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
