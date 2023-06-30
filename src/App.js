
import { useContext } from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/topnavbar';
import { AuthContext } from './components/contex';

function App() {
  const {logedin} = useContext(AuthContext);
  return (
   
    <div className="App">

    {logedin ? (
      <div>
        <Navbar />
        <Home />
      </div>
    ) : (
      <Login />
    )}
  </div>
  );
}

export default App;
