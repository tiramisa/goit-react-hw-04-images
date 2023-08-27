import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import '../css/styles.module.css';
import fetchPhotos from './api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    hasMoreImages: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      fetchPhotos(nextQuery, nextPage)
        .then(response => response.json())
        .then(data => {
          let images = [...this.state.images, ...data.hits];
          let hasMoreImages = nextPage < Math.ceil((images.length + 1) / 12);
          console.log(hasMoreImages);
          this.setState(prevState => ({
            images: images,
            isLoading: false,
            hasMoreImages: hasMoreImages,
          }));
        })
        .catch(error => {
          console.error('Error loading images:', error);
          this.setState({ isLoading: false });
        });
    }
  };

  handleImageClick = imageData => {
    console.log(imageData);
    this.setState({ modalData: imageData });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchSubmit = evt => {
    evt.preventDefault();
    let q = evt.target.elements.query.value.trim();
    console.log(q);
    this.setState(prevState => ({
      query: q,
      images: [],
      page: 1,
      isLoading: false,
    }));
  };

  render() {
    const { images, isLoading, hasMoreImages } = this.state;
    return (
      <div className="root">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} onClickImage={this.handleImageClick} />
        )}
        <Button
          onClick={this.handleLoadMoreClick}
          hasMoreImages={hasMoreImages}
        />
      </div>
    );
  }
}
