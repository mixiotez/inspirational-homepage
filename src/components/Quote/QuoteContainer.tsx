import styled from 'styled-components';
import Card from '../common/Card';

export const QuoteContainer = styled(Card)`
  font-size: 1.25rem;
  text-align: right;
  flex-grow: 1;
  flex-direction: column;

  q {
    font-size: 2rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    font-style: italic;
    text-align: left;
  }

  @media screen and (max-width: 1023px) {
    font-size: 1rem;

    q {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;

    q {
      font-size: 1.25rem;
    }
  }
`;
