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

  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      letter-spacing: normal;
      font-size: 1.25rem;
    }
  }
`;

export const GoalFormContainer = styled.form`
  display: flex;
  gap: 16px;
  flex-basis: 100%;
  min-width: 0;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.5);

  input {
    flex-grow: 1;

    &:focus {
      outline: rgba(0, 0, 0, 0.5) solid 3px;
    }
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

  @media screen and (max-width: 1023px) {
    margin-bottom: 8px;

    button,
    input {
      text-align: center;
      font-size: 1rem;
      padding: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;

    button,
    input {
      font-size: 0.75rem;
      padding: 8px 16px;
    }
  }
`;

export const GoalsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    gap: 8px;
  }
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
  }

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

  @media screen and (max-width: 1023px) {
    padding: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
    padding: 16px 8px;
  }
`;
