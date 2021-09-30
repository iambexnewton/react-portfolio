import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import Homepage from './components/pages/Homepage/Homepage.js';
import Footer from './components/pages/Footer/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
