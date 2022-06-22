import React, { Component } from 'react';
import PaginaInicial from './Components/PaginaInicial/PaginaInicial.jsx'
import ApplicationRoutes from './Components/Routers/Routers.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <ApplicationRoutes/>
    );
  }
}

export default App;