import React from 'react';
//import pages
import AboutUs from './Pages/AboutUs';
import OurWork from './Pages/OurWork';
import ContactUs from './Pages/ContactUs';
// Import navigation Component
import Nav from './Components/Nav';
//import Global Style
import GlobalStyle from './Components/GlobalStyle';
//import Router
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
          <Route path="/" exact> 
              <AboutUs />
          </Route>
          <Route path="/work">
              <OurWork />
          </Route>
          <Route path="/contact">
              <ContactUs />
          </Route>
      </Switch>    
    </div>
  );
}

export default App;
