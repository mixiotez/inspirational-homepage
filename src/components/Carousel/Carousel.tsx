import { useEffect, useState } from 'react';
import { Container } from './CarouselContainer';
import mockedImagesPage from './mockedImagesPage.json';

type FetchStatus = 'loading' | 'successful' | 'error';
type Page = typeof mockedImagesPage;
type Images = Page['results'];

const UNSPLASH_URL =
  'https://api.unsplash.com/search/photos?' +
  new URLSearchParams({
    query: 'nature',
    per_page: '5',
    orientation: 'landscape',
  }).toString();

const Carousel: React.FC = () => {
  const [images, setImages] = useState<Images>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('loading');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    const fetchImages = async () => {
      setFetchStatus('loading');

      const response: Response = await fetch(UNSPLASH_URL, {
        cache: 'no-cache',
        headers: {
          'Accept-Version': 'v1',
          Authorization: `Client-ID ${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`,
        },
      });

      return (await response.json()) as Promise<Page>;
    };

    fetchImages()
      .then((data) => {
        setFetchStatus('successful');
        setImages(data.results);
      })
      .catch((error) => {
        setFetchStatus('error');
        console.error(error);
      });
  }, []);

  if (fetchStatus !== 'successful') return <></>;

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
