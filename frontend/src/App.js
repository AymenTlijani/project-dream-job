import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProScreen from './screens/ProScreen';

const App =() => {
  return( 
    <BrowserRouter>
<div className="grid-container">
<header className="row">
        <div>
          <a className="brand" href="index.html"> 
          <img style={{maxHeight:"60px"}} src='/logo.png' alt='logo'/>
          </a>
        </div>
        <div>
          <a href="cart.html">Client</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main style={{marginTop:"30px"}}>
          <Route path="/pro/:id" component={ProScreen}/>
          <Route path="/" component={HomeScreen} exact />
      </main>

      <footer className="row center"> All right reserved || { new Date().getFullYear()} 

      {/*{new Date().toLocaleString() + ''}*/}

        </footer>
    </div>
</BrowserRouter>
  );
}

export default App;
