import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImagesWithQuery } from '../utils/GetImage.js';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getImagesData();
  }

  getImagesData = async () => {
    try {
      const images = await fetchImagesWithQuery(this.state.query);
      this.setState({ images });
    } catch (error) {
      console.log('error');
      this.setState({ error });
    } finally {
      console.log('finally');
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <>
        <Searchbar />
        {/* {isLoading ? <Loader /> : <ImageGallery images={images} />} */}
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}

export default App;
