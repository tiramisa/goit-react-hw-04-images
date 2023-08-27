import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../../css/styles.module.css';

Modal.setAppElement('#root');

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props.item;
    const { isModalOpen } = this.state;

    return (
      <li key={id} className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />

        <Modal
          className={styles.Modal}
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Image Modal"
        >
          <img src={largeImageURL} alt={tags} />
          <button className={styles.ModalButton} onClick={this.closeModal}>
            x
          </button>
        </Modal>
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
