import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 34px;
  left: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;

  @media screen and (max-width: 424px) {
    width: 200px;
  }
`;

type NotificationContainerProps = { $isError: boolean; $isActive: boolean };
export const NotificationContainer = styled.div<NotificationContainerProps>`
  display: flex;
  gap: 16px;
  border: 1px solid black;
  padding: 8px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$isError ? 'rgba(255, 0, 0, 0.8)' : 'rgba(220, 220, 100, 0.8)'};
  opacity: ${(props) => (props.$isActive ? '1' : '0.05')};
  transition: opacity 4s linear 3s;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 8px;
    margin: -8px;
  }

  @media screen and (max-width: 424px) {
    padding: 4px;
    gap: 8px;
  }
`;
