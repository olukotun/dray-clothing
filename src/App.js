import React from 'react';
import {Route,Switch,Link} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatePage = (props) =>{
  console.log(props)
  return(
  <div>
    <Link to='/'>Topics</Link>
    
  <h1> THIS IS THE HATPAGE: {props.match.params.hatid}</h1>
</div>
);
}


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatePage} />

      </Switch>
     
  
    </div>
  );
}

export default App;
