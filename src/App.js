import React from 'react';
//import pages
import AboutUs from './Pages/AboutUs';
//import Global Style
import GlobalStyle from './Components/GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
