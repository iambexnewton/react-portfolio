import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Homepage from './components/pages/Homepage/Homepage.js';
import Footer from './components/pages/Footer/Footer.js';
import BlogContainer from './components/BlogContainer';
import ProjectSection from './components/pages/Projects/projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
      <Route path="/Projects" exact component={ProjectSection} />
      <Route path="/Blogs" exact component={BlogContainer} />
      <Footer />
    </Router>
  );
}

export default App;
