import React from 'react';
//import pages
import AboutUs from './Pages/AboutUs';
import OurWork from './Pages/OurWork';
import ContactUs from './Pages/ContactUs';
import MovieDetail from './Pages/MovieDetail';
// Import navigation Component
import Nav from './Components/Nav';
//import Global Style
import GlobalStyle from './Components/GlobalStyle';
//import Router
import {Switch, Route, useLocation} from 'react-router-dom';
//import AnimatePresence
import {AnimatePresence} from 'framer-motion';

const App = () => {

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route path="/" exact> 
                <AboutUs />
            </Route>
            <Route path="/work" exact>
                <OurWork />
            </Route>
            <Route  path="/work/:id">
                <MovieDetail />
            </Route>
            <Route path="/contact">
                <ContactUs />
            </Route>
        </Switch>
      </AnimatePresence>    
    </div>
  );
}

export default App;
