import Container from './components/Container/Container';
import Splash from './components/Splash/Splash';
import Quote from './components/Quote/Quote';

const App = () => {
  return (
    <>
    <Splash />
    <Container>
      <Quote />
    </Container>
    </>
  );
};

export default App;
