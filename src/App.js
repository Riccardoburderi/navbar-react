import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Pages/Products';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/signup' component={Signup}></Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
