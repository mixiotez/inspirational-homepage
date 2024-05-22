import styled from 'styled-components';
import Card from '../common/Card';

export const GoalsContainer = styled(Card)`
  width: calc(80% - 16px);
  flex-wrap: wrap;
  justify-content: center;
`;

export const GoalContainer = styled.div<{ $isDone: boolean }>`
  position: relative;
  display: flex;
  min-width: 70px;
  max-width: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px 16px;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
  opacity: ${(props) => (props.$isDone ? '0.5' : '1')};

  div {
    position: absolute;
    top: -10px;
    right: 0;
    display: flex;
    gap: 4px;

    button {
      color: white;
      cursor: pointer;
      border: 0;
      border-radius: 16px;
      padding: 3px 6px;
      font-size: 0.75rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

      &:first-child {
        background-color: rgba(255, 0, 0, 0.6);

        &:hover {
          background-color: rgba(255, 0, 0, 0.9);
        }
      }

      &:last-child {
        background-color: rgba(0, 128, 0, 0.6);

        &:hover {
          background-color: rgba(0, 128, 0, 0.9);
        }
      }
    }
  }
`;
