import Container from './components/Container/Container';
import Splash from './components/Splash/Splash';
import Quote from './components/Quote/Quote';
import Column from './components/Column/Column';
import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Splash />
      <Container>
        <Quote />
        <Column />
      </Container>
      <Counter />
      <Footer />
    </>
  );
};

export default App;
