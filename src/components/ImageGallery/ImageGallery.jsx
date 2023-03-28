import './components/styles.css';
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ images }) => {
    return (
        <ul className={css.ImageGallery}>
            <ImageGalleryItem />
        </ul>)
};

export default ImageGallery;

