import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components/Feedback/Feedback';
import TableNews from './components/TableNews/TableNews';
import GridNews from './components/GridNews/GridNews';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={GridNews} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/tablenews' component={TableNews} />
        </Switch>
      </Router>
    </>
  );
}

export default App;