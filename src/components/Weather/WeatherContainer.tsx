import styled from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  flex-basis: 20%;
  color: rgb(15, 15, 15);
  font-size: 1rem;
  line-height: 1;
  padding: 16px 32px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  gap: 16px;

  img {
    margin: -20px; // The png is badly cropped. This helps align it better.
  }

  p {
    margin-bottom: 8px;
  }

  div {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    &:first-child {
      min-width: fit-content;
      border-right: 2px dotted rgba(0, 0, 0, 0.5);

      p {
        font-size: 0.75rem;
      }
    }

    &:last-child {
      flex-basis: 60%;

      b {
        font-weight: 500;
        font-size: 1.5rem;
      }
    }
  }
`;
