import React, { Component } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImagesWithQuery } from '../utils/GetImage.js';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    modalContent: null,
    inputValue: '',
  };
  page = 1;

 

  getImagesData = async inputValue => {
    this.setState({ isLoading: true });
    try {
      let moreImages = await fetchImagesWithQuery(inputValue, this.page);
      moreImages = this.state.images.concat(moreImages);
      this.setState({ images: moreImages, error: null });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchForImages = async inputValue => {
    this.page = 1;
    this.setState({ images: [], inputValue: inputValue });
    this.getImagesData(inputValue);
  };

  loadMore = async () => {
    this.page = this.page + 1;
    this.getImagesData(this.state.inputValue);
  };

  closeModal = () => {
    this.setState({ modalContent: null });
  };

  escapeModal = event => {
    if (this.state.modalContent !== null && event.key === 'Escape') {
      this.closeModal();
    }
  };

  showModal = modalContent => {
    this.setState({ modalContent: modalContent });
  };

  render() {
    const { images, isLoading, error, modalContent } = this.state;
    return (
      <div className={css.App} onKeyDown={this.escapeModal} tabIndex={-1}>
        <Searchbar onSubmit={this.searchForImages} />

        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} showModal={this.showModal} />
        )}
        {modalContent !== null && (
          <Modal
            largeImage={modalContent.largeImage}
            tags={modalContent.tags}
            onClick={this.closeModal}
          />
        )}

        {!isLoading && images.length > 0 && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}

export default App;
