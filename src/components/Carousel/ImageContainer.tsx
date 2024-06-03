import { useState } from 'react';
import Blurhash from './Blurhash';
import { BackgroundImage } from './CarouselContainer';

type ImageContainerProps = {
  hash: string;
  displayImage: boolean;
  src: string;
  alt: string;
  index: number;
};

const ImageContainer = ({
  hash,
  displayImage,
  src,
  alt,
  index,
}: ImageContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => setIsLoading(false);

  return (
    <>
      {isLoading && displayImage && <Blurhash hash={hash} />}
      <BackgroundImage
        fetchPriority={index === 0 ? 'high' : 'low'}
        $displayImage={displayImage}
        src={src}
        alt={alt}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageContainer;
