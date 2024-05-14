import { useState } from 'react';
import mockedImages from '../MockedImages.json';
import { Container } from './Container';

export const Carousel = () => {
  const [images, setImages] = useState(mockedImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  return (
    <Container>
      <img src={currentImage.urls.full} alt={currentImage.alt_description} />
      <button
        aria-label="Change background to previous image"
        disabled={currentImageIndex === 0}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        &lt;
      </button>
      <button
        aria-label="Change background to next image"
        disabled={currentImageIndex === images.length - 1}
        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
      >
        &gt;
      </button>
    </Container>
  );
};
