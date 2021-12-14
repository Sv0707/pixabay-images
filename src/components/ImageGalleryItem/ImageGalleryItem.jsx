import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, openImg }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => {
        openImg(image.largeImageURL);
      }}
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
