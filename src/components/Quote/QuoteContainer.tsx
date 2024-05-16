import styled from 'styled-components';
import Card from '../common/Card';

export const QuoteContainer = styled(Card)`
  font-size: 1.25rem;
  text-align: right;
  flex-basis: 80%;
  flex-direction: column;

  q {
    font-size: 2rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    font-style: italic;
    text-align: left;
  }
`;
