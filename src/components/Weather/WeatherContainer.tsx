import styled from 'styled-components';
import Card from '../common/Card';

export const WeatherContainer = styled(Card)`
  flex-basis: 20%;

  img {
    margin: -26px; // The png is badly cropped. This helps align it better.
  }

  div {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    &:first-child {
      border-right: 2px dotted rgba(0, 0, 0, 0.5);

      p {
        font-size: 0.75rem;
        margin: 0;
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
