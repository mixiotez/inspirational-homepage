import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: calc(100% - 64px);
  display: flex;
  gap: 32px;

  @media screen and (max-width: 1023px) {
    width: calc(100% - 48px);
    gap: 16px;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 32px);
    flex-direction: column;
    gap: 8px;
  }
`;

export const AppContainer = styled(CardsContainer)`
  overflow: hidden;
  height: calc(100vh - 32px);
  margin: 16px 32px;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px) {
    margin: 16px 24px;
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 16px);
    margin: 8px 16px;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0 8px;
  background-color: white;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 1.25rem;
  }
`;
