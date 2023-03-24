import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'url_do_zdjęcia_1',
    thumbnail: 'url_do_miniatury_1',
  },
  {
    original: 'url_do_zdjęcia_2',
    thumbnail: 'url_do_miniatury_2',
  },
  // Dodaj pozostałe zdjęcia w takim samym formacie
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <ImageGallery
        items={images}
        showThumbnails={true}
        autoPlay={false}
        showBullets={true}
        onSlide={handleImageSelect}
      />
      <div>
        <h2>Zdjęcie {selectedIndex + 1} z {images.length}</h2>
        <img src={images[selectedIndex].original} alt={`Zdjęcie ${selectedIndex + 1}`} />
      </div>
    </div>
  );
};

export default PhotoGallery;
