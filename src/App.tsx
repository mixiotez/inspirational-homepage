import Carousel from './components/Carousel';
import Quote from './components/Quote';
import Weather from './components/Weather';
import Goals from './components/Goals';
import { AppContainer, CardsContainer, Footer } from './AppContainers';
import NotificationsProvider from './NotificationsContext';
import Notifications from './components/Notifications';

function App() {
  return (
    <NotificationsProvider>
      <AppContainer>
        <Notifications />
        <Carousel />
        <CardsContainer>
          <Quote />
          <Weather />
        </CardsContainer>
        <Goals />
      </AppContainer>
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
    </NotificationsProvider>
  );
}

export default App;
