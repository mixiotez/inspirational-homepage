import styled from 'styled-components';

const Card = styled.section`
  color: rgb(15, 15, 15);
  font-size: 1rem;
  line-height: 1;

  display: flex;
  gap: 16px;
  padding: 16px 32px;
  backdrop-filter: blur(16px);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;

  p {
    margin-bottom: 8px;
  }
`;

export default Card;
