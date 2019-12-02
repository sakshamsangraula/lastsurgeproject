import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const ReturnPage = () => (
  <div>
<h1>RETURN PAGE</h1>

  </div>
)

const RentPage = () => (
  <div>
<h1>RENT PAGE</h1>

  </div>
)


function App(){
return(
 <div> 
<Switch>
<Route exact path='/' component={HomePage} />
 <Route path='/return' component={ReturnPage} />
 <Route path='/rent' component={RentPage} />
</Switch>
</div>
);
}
 

export default App;
