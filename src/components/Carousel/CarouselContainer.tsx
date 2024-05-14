import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
