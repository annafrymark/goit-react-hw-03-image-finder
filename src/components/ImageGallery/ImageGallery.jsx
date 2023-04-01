import css from '../styles.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images);
  console.log('jestem w ImageGallery');
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webImage={image.webformatURL}
          largeImage={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
