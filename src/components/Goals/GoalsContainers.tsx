import styled from 'styled-components';
import Card from '../common/Card';

export const GoalsCard = styled(Card)`
  flex-grow: 0.5;
  width: calc(80% - 16px);
  flex-wrap: wrap;
  align-content: flex-start;

  h1 {
    letter-spacing: 0.05rem;
    font-size: 1.75rem;
    margin: 8px;
  }
`;

export const GoalFormContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-basis: 100%;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.5);

  input {
    flex-grow: 1;
  }

  button {
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.8);
    }

    &:disabled {
      cursor: default;
      color: revert;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  button,
  input {
    color: rgb(15, 15, 15);
    font-size: 1.25rem;
    border: 0;
    border-radius: 16px;
    padding: 16px 24px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const GoalsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

type GoalContainerProps = { $isDone: boolean };
export const GoalContainer = styled.div<GoalContainerProps>`
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
      transition: all 0.1s ease;

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
