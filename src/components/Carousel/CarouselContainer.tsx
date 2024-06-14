import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  button {
    height: 86px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    font-size: 4rem;
    padding: 24px;
    margin: 16px;
    border: none;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;

    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.6);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.9);
    }

    &:disabled {
      cursor: default;
      color: rgba(0, 0, 0, 0.25);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  p {
    position: absolute;
    bottom: 36px;
    right: 4px;
    padding: 4px;
    background-color: white;
  }

  @media screen and (max-width: 1023px) {
    button {
      height: 60px;
      font-size: 3rem;
      padding: 16px;
      margin: 8px;
    }
  }

  @media screen and (max-width: 767px) {
    button {
      height: auto;
      border-radius: 0;
      padding: 32px 4px;
    }

    p {
      font-size: 0.75rem;
      bottom: 30px;
    }
  }

  @media screen and (max-width: 424px) {
    button {
      padding: 32px 0;
      margin: 0;
    }
  }
`;

type BackgroundImageProps = { $displayImage: boolean };
export const BackgroundImage = styled.img<BackgroundImageProps>`
  display: ${(props) => (props.$displayImage ? 'block' : 'none')};
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
