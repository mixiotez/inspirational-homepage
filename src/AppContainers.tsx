import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: calc(100% - 64px);
  display: flex;
  gap: 32px;
`;

export const AppContainer = styled(CardsContainer)`
  overflow: hidden;
  height: calc(100vh - 32px);
  margin: 16px 32px;
  gap: 32px;
  flex-direction: column;
  align-items: center;
`;
