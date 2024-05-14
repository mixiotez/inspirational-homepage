import styled from 'styled-components';

export const QuoteContainer = styled.p`
  color: rgb(15, 15, 15);
  font-size: 1.5rem;
  line-height: 1;
  text-align: end;
  display: flex;
  margin: 0 64px;
  padding: 16px 32px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;

  q {
    font-size: 2rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    font-style: italic;
    text-align: left;
    margin-bottom: 8px;
  }
`;
