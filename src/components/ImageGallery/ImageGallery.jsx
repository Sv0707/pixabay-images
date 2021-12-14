import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openImg }) => {
  return (
    <ul className={s.ImageGallery}>
      {gallery.map((image) => (
        <ImageGalleryItem key={image.id} image={image} openImg={openImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  openImg: PropTypes.func,
};

export default ImageGallery;
