import Carousel from './components/Carousel';
import Quote from './components/Quote';
import Weather from './components/Weather';
import Goals from './components/Goals';
import { AppContainer, CardsContainer } from './AppContainers';

function App() {
  return (
    <AppContainer>
      <Carousel />
      <CardsContainer>
        <Quote />
        <Weather />
      </CardsContainer>
      <Goals />
      <CardsContainer>
        <p>Developed by me</p>
      </CardsContainer>
    </AppContainer>
  );
}

export default App;
