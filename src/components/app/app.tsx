import '../../index.css';
import { clsx } from 'clsx';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import styles from './app.module.css';

const App = () => (
  <Container>
    <h1>Начало</h1>
    <Button>SuperButton</Button>
  </Container>
);

export default App;
