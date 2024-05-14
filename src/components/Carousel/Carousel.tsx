import { useEffect, useState } from 'react';
import mockedImages from '../MockedImages.json';
import { Container } from './CarouselContainer';

const UNSPLASH_URL: string =
  'https://api.unsplash.com/photos/random?' +
  new URLSearchParams({
    count: '5',
    orientation: 'landscape',
    topics: 'nature,inspirational',
  });

const Carousel = () => {
  const [images, setImages] = useState<[] | typeof mockedImages>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(UNSPLASH_URL, {
        cache: 'no-cache',
        headers: {
          'Accept-Version': 'v1',
          Authorization: `Client-ID ${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`,
        },
      });

      return await response.json();
    };

    fetchImages()
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!currentImage) return <></>;

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

export default Carousel;
