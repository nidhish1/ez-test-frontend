import logo from './logo.svg';
import './App.css';
import './Components/Login/Login'
import Navigation from './Components/Navigation/Navigation';

import {BrowserRouter as Router, NavLink,Redirect} from  'react-router-dom' 
import Route from 'react-router-dom/Route'
import Login from './Components/Login/Login'

function App() {

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
