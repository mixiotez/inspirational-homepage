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
    top: 0;
    left: 0;
    width: calc(100% - 16px);
    padding: 8px;
  }
`;

type NotificationContainerProps = { $isError: boolean; $isActive: boolean };
export const NotificationContainer = styled.div<NotificationContainerProps>`
  color: white;
  display: flex;
  gap: 16px;
  border: 1px solid black;
  padding: 8px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$isError ? 'rgb(255, 20, 20)' : 'rgb(220, 220, 100)'};
  opacity: ${(props) => (props.$isActive ? '1' : '0.05')};
  transition: opacity 4s linear 3s;

  button {
    cursor: pointer;
    color: white;
    background-color: transparent;
    border: none;
    padding: 8px 16px;
    margin: -8px;
  }
`;
