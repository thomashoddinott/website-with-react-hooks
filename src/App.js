import logo from './logo.svg';
//import './App.css'; //fixme
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//continue from 45min

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
