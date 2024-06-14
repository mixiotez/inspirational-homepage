import styled from 'styled-components';

export const CardsContainer = styled.div`
  max-width: 1028px;
  display: flex;
  gap: 32px;

  @media screen and (max-width: 1023px) {
    gap: 16px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const AppContainer = styled(CardsContainer).attrs({
  as: 'main',
})`
  justify-content: flex-start;
  overflow: hidden;
  height: calc(100vh - 64px);
  padding: 16px 32px;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px) {
    padding: 16px 24px;
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 42px);
    padding: 8px 16px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 424px) {
    font-size: 1rem;
  }
`;

export const ConfettiContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
`;
