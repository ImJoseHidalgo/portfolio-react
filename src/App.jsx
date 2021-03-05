import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactFooter from './components/ui/Footer/ContactFooter';
import GlobalActions from './components/GlobalActions';
import About from './components/pages/AboutScreen/AboutScreen';
import Blog from './components/pages/BlogScreen/BlogScreen';
import Home from './components/pages/HomeScreen/Home';
import Page404 from './components/pages/404Screen/Page404';
import { footerObserver } from './utils/intersectionObserver';
import PortfolioScreen from './components/pages/Portfolioscreen/PortfolioScreen';
import ContactScreen from './components/pages/ContactScreen/ContactScreen';
import { Main } from './App.styles';

const App = () => {

  useEffect(() => {
    footerObserver();
  }, []);

  return (
    <Router>
      <Main className='main'>
        <GlobalActions />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/portfolio' component={PortfolioScreen} />
          <Route exact path='/contact' component={ContactScreen} />
          <Route component={Page404} />
        </Switch>
        <ContactFooter />
      </Main>
    </Router>
  )
}

export default App;
