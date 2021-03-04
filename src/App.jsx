import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactFooter from './components/ContactFooter';
import GlobalActions from './components/GlobalActions';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';
import { footerObserver, topObserver } from './utils/intersectionObserver';

const App = () => {

  useEffect(() => {
    footerObserver();
    // topObserver();
  }, []);

  return (
    <Router>
      <main className='main'>
      <GlobalActions />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route component={Page404} />
      </Switch>
      <ContactFooter />
      </main>
    </Router>
  )
}

export default App;
