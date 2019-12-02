import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import FamilyPic from './familypicincar.jpg';
import RoadTrip from './roadtrip.jpg';
import SelectState from './selectastate.JPG';
import SelectTag from './selecttag.JPG';




const ReturnPage = () => (
  <div>
<h1>
  RETURN A CAR
  <hr/>
  <br/>
<img src= {RoadTrip} alt="family in a car"/>
<br/>
  <br/>
  <br/>
  <img src= {SelectTag} alt="select a state"/>
  <br/>

<button>ALABAMA</button>
<button>ALASKA</button>
<button>ARIZONA</button>
<button>ARKANSAS</button>
<button>CALIFORNIA</button>
<button>COLORADO</button>
<button>CONNECTICUT</button>
<button>DELAWARE</button>
<button>FLORIDA</button>
<br/>
<button>GEORGIA</button>
<button>HAWAII</button>
<button>IDAHO</button>
<button>ILLINOIS</button>
<button>IOWA</button>
<button>KANSAS</button>
<button>KENTUCKY</button>
<button>LOUISIANA</button>
<button>MAINE</button>
<button>MARYLAND</button>
<br/>
<button>MASSACHUSETTS</button>
<button>MICHIGAN</button>
<button>MINNESOTA</button>
<button>MISSISSIPPI</button>
<button>MISSOURI</button>
<button>MONTANA</button>
<button>NEBRASKA</button>
<button>NEVADA</button>
<button>NEW HAMPSHIRE</button>
<button>NEW JERSEY</button>
<br/>
<button>NEW MEXICO</button>
<button>NEW YORK</button>
<button>NORTH CAROLINA</button>
<button>NORTH DAKOTA</button>
<button>OHIO</button>
<button>OKLAHOMA</button>
<button>OREGON</button>
<button>PENNSYLVANIA</button>
<button>RHODE ISLAND</button>
<button>SOUTH CAROLINA</button>
<br/>
<button>SOUTH DAKOTA</button>
<button>TENNESSEE</button>
<button>TEXAS</button>
<button>UTAH</button>
<button>VERMONT</button>
<button>VIRGINIA</button>
<button>WASHINGTON</button>
<button>WEST VIRGINIA</button>
<button>WISCONSIN</button>
<button>WYOMING</button>
<br/>









</h1>

  </div>
)

const RentPage = () => (
  <div>
  <h1>
    RENT A CAR
    <hr/>
    <br/>
  <img src= {FamilyPic} alt="family in a car"/>
  <br/>
  <br/>
  <br/>
  <img src= {SelectTag} alt="select a state"/>
  <br/>
  
  <button>ALABAMA</button>
  <button>ALASKA</button>
  <button>ARIZONA</button>
  <button>ARKANSAS</button>
  <button>CALIFORNIA</button>
  <button>COLORADO</button>
  <button>CONNECTICUT</button>
  <button>DELAWARE</button>
  <button>FLORIDA</button>
  <br/>
  <button>GEORGIA</button>
  <button>HAWAII</button>
  <button>IDAHO</button>
  <button>ILLINOIS</button>
  <button>IOWA</button>
  <button>KANSAS</button>
  <button>KENTUCKY</button>
  <button>LOUISIANA</button>
  <button>MAINE</button>
  <button>MARYLAND</button>
  <br/>
  <button>MASSACHUSETTS</button>
  <button>MICHIGAN</button>
  <button>MINNESOTA</button>
  <button>MISSISSIPPI</button>
  <button>MISSOURI</button>
  <button>MONTANA</button>
  <button>NEBRASKA</button>
  <button>NEVADA</button>
  <button>NEW HAMPSHIRE</button>
  <button>NEW JERSEY</button>
  <br/>
  <button>NEW MEXICO</button>
  <button>NEW YORK</button>
  <button>NORTH CAROLINA</button>
  <button>NORTH DAKOTA</button>
  <button>OHIO</button>
  <button>OKLAHOMA</button>
  <button>OREGON</button>
  <button>PENNSYLVANIA</button>
  <button>RHODE ISLAND</button>
  <button>SOUTH CAROLINA</button>
  <br/>
  <button>SOUTH DAKOTA</button>
  <button>TENNESSEE</button>
  <button>TEXAS</button>
  <button>UTAH</button>
  <button>VERMONT</button>
  <button>VIRGINIA</button>
  <button>WASHINGTON</button>
  <button>WEST VIRGINIA</button>
  <button>WISCONSIN</button>
  <button>WYOMING</button>
  <br/>
  
  
  
  
  
  
  
  
  
  </h1>
  
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
