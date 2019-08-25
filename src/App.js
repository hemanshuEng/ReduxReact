import React from 'react';
import Postform from './component/Postform'
import Posts from './component/Posts'
import './App.css';

class App extends React.Component {
 render() {
   return (
     <div>
       <div className="container">
        <Postform/>
       <Posts/>
       </div>
     </div>
   )
 }
  
}

export default App;
