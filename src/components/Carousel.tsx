import { useState } from 'react';
import mockedImages from './MockedImages.json';
import styled from 'styled-components';

export const Carousel = () => {
  const [images, setImages] = useState(mockedImages);

  return (
    <Container>
      <img src={images[0].urls.full} alt={images[0].alt_description} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
