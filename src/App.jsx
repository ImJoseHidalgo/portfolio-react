import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalActions from './components/GlobalActions';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Page404 from './pages/Page404';

const App = () => {

  return (
    <Router>
      <GlobalActions />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default App;
