import logo from './logo.svg';
import './App.css';
import './Components/Login/Login'
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
