import styled from 'styled-components';
import Card from '../common/Card';

export const WeatherContainer = styled(Card)`
  img {
    margin: -25px; // The png is badly cropped. This helps align it better.
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    &:first-child {
      flex-grow: 1;
      gap: 4px;
      min-width: 72px;
      border-right: 2px dotted rgba(0, 0, 0, 0.5);

      p {
        font-size: 0.75rem;
        margin: 0;
      }
    }

    &:last-child {
      flex-basis: 60%;
    }

    b {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 1023px) {
    img {
      margin: -20px;
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 767px) {
    img {
      margin: -18px;
      width: 72px;
      height: 72px;
    }

    div {
      align-items: center;

      &:first-child {
        flex-basis: 50%;
      }

      &:last-child {
        flex-basis: 50%;
      }

      p {
        font-size: 0.75rem;
      }

      b {
        font-size: 1.25rem;
      }
    }
  }
`;
