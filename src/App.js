import React from 'react';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
