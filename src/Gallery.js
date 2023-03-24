import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import image1 from "./images/image.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img src={images[0].original} alt="Image 1" />
      <img src={images[1].original} alt="Image 2" />
      <img src={images[2].original} alt="Image 3" />
    </div>
  );
};

export default Gallery;
