import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
