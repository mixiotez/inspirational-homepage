import styled from 'styled-components';
import Carousel from './components/Carousel';
import Quote from './components/Quote';
import Weather from './components/Weather';

function App() {
  return (
    <>
      <Carousel />
      <FirstCardsContainer>
        <Quote />
        <Weather />
      </FirstCardsContainer>
      <p>Goals!</p>
    </>
  );
}

const FirstCardsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export default App;
