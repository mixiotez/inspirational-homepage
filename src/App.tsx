import Carousel from './components/Carousel';
import Quote from './components/Quote';
import Weather from './components/Weather';
import Goals from './components/Goals';
import { AppContainer, CardsContainer, Footer } from './AppContainers';

function App() {
  return (
    <AppContainer>
      <Carousel />
      <CardsContainer>
        <Quote />
        <Weather />
      </CardsContainer>
      <Goals />
      <Footer>
        Created with ❤️ by{' '}
        <a
          href="https://github.com/mikempala"
          rel="noopener noreferrer"
          target="_blank"
        >
          Miguel Téllez
        </a>
      </Footer>
    </AppContainer>
  );
}

export default App;
