import { useEffect, useRef } from 'react';
import { decode } from 'blurhash';
import styled from 'styled-components';

type BlurhashProps = {
  hash: string;
};

const Blurhash = ({ hash }: BlurhashProps) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const pixels = decode(hash, 128, 128, 1);
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        const imageData = ctx.createImageData(128, 128);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }, [hash]);

  return (
    <CanvasContainer>
      <canvas height="128" width="128" ref={canvasRef} />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Blurhash;
