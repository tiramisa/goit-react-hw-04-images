import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import '../css/styles.module.css';
import fetchPhotos from './api';
import { animateScroll as scroll } from 'react-scroll';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);

    fetchPhotos(query, page)
      .then(response => response.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setHasMoreImages(data.hits.length > 0);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading images:', error);
        setIsLoading(false);
      });
  }, [query, page]);

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
    scroll.scrollToBottom();
  };

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    const q = evt.target.elements.query.value.trim();
    setQuery(q);
    setImages([]);
    setPage(1);
    setIsLoading(false);
  };
  const handleImageClick = imageData => {};

  return (
    <div className="root">
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageGallery images={images} onClickImage={handleImageClick} />
          <Button onClick={handleLoadMoreClick} hasMoreImages={hasMoreImages} />
        </>
      )}
    </div>
  );
};
