import styled from 'styled-components';

const Card = styled.section`
  color: rgb(15, 15, 15);
  font-size: 1rem;
  line-height: 1;

  display: flex;
  gap: 16px;
  padding: 16px 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  p {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1023px) {
    padding: 16px 24px;
  }

  @media screen and (max-width: 767px) {
    gap: 8px;
    padding: 8px 16px;
  }
`;

export default Card;
