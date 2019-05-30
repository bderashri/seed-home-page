import React from 'react';
import logo from './logo.svg';
import './App.css';
import './seedStyle.css';
import Data from './components/object.json'
import Card from './components/Card'
import Panel from './components/Panel'
function App() {
  
  return (
    <div style={{backgroundColor:'#D3D3D3'}}>
      <div >
          <div className="panel" >
          <p style={{color:'black',fontWeight:'bold',paddingLeft:'20px'}}>My ideas</p>
            <Panel Data={Data}/>
          </div>

          <div className="panel" style={{ paddingTop:'10px'}}>
          <p style={{color:'black',fontWeight:'bold',paddingLeft:'20px'}}> My Assests</p>
            <Panel Data={Data}/>
          </div>
      </div>
    </div>
  );
}

export default App;
