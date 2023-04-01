import React, { Component } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { fetchImagesWithQuery } from '../utils/GetImage.js';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    inputValue: '',
  };
  page = 1;

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   await this.getImagesData();
  // }

  getImagesData = async inputValue => {
    this.setState({ isLoading: true });
    try {
      let moreImages = await fetchImagesWithQuery(inputValue, this.page);
      moreImages = this.state.images.concat(moreImages);
      this.setState({ images: moreImages, error: null });
    } catch (error) {
      console.log('error');
      this.setState({ error: error });
    } finally {
      console.log('finally');
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

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.searchForImages} />

        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {!isLoading && images.length > 0 && <Button onClick={this.loadMore} />}
        {/* {<Loader />} */}
      </div>
    );
  }
}

export default App;
