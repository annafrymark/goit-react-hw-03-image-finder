import css from '../styles.module.css';

const ImageGalleryItem = ({ webImage, largeImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webImage} alt=""/>
    </li>
  );
};

export default ImageGalleryItem;
