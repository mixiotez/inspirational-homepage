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

  img {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    font-size: 4rem;
    line-height: 40px;
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
      font-size: 3rem;
      line-height: 28px;
      padding: 16px;
      margin: 8px;
    }
  }

  @media screen and (max-width: 767px) {
    button {
      border-radius: 0;
      padding: 32px 4px;
    }

    p {
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
