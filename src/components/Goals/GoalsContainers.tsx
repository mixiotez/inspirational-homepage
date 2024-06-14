import styled from 'styled-components';
import Card from '../common/Card';

export const GoalsCard = styled(Card)`
  flex-grow: 0.5;
  width: 724px;
  flex-wrap: wrap;
  align-content: flex-start;
  max-height: 50vh;
  overflow-clip-margin: content-box 8px;
  overflow: clip;

  h1 {
    letter-spacing: 0.05rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1023px) {
    width: calc(100% - 152px);
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 104px);

    h1 {
      letter-spacing: normal;
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 424px) {
    width: calc(100% - 72px);
  }
`;

export const GoalFormContainer = styled.form`
  display: flex;
  gap: 16px;
  flex-basis: 100%;
  min-width: 0;
  padding-bottom: 24px;
  margin-bottom: 8px;
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
    font-size: 1rem;
    border: 0;
    border-radius: 16px;
    padding: 16px 24px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 1023px) {
    button,
    input {
      text-align: center;
      padding: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    margin-bottom: 16px;

    button,
    input {
      font-size: 0.75rem;
      padding: 8px 16px;
    }
  }
`;

export const GoalsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: -16px -8px;
  padding: 16px 8px;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden auto;
  scrollbar-width: thin;
  scrollbar-color: white transparent;
  max-height: calc(100% - 148px);

  @media screen and (max-width: 767px) {
    max-height: calc(100% - 138px);
    gap: 8px;
    margin: -24px -8px;
  }
`;

type GoalContainerProps = { $isDone: boolean };
export const GoalContainer = styled.div<GoalContainerProps>`
  flex: 1 1 auto;
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
  opacity: ${(props) => (props.$isDone ? '0.05' : '1')};
  transition: opacity 2.5s ease-out;

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
    min-width: 40px;
    max-width: 175px;
  }
`;
