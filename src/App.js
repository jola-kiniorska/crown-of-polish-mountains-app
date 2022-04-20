import Container from './components/Container/Container';
import Splash from './components/Splash/Splash';
import Quote from './components/Quote/Quote';
import Column from './components/Column/Column';

const App = () => {
  return (
    <>
    <Splash />
    <Container>
      <Quote />
      <Column />
    </Container>
    </>
  );
};

export default App;
