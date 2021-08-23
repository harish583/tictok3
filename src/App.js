// import logo from './logo.svg';
import './styles/App.css';
 import React from "react";
import Navbar from './components/Navbar';
import NavRoutes from './routes';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <NavRoutes />
      </div>
    );
  }
}

export default App;
