import React, { Component } from 'react';
import logo_black from '../public/img/logos/L -logo-black.png'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="id-panel">
          <img src={logo_black} alt="LA logo"/> 
       </div>
       <div className="content-panel">
         <p>
         Hi! 

         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ab perspiciatis repudiandae esse numquam nihil obcaecati, officiis deserunt aspernatur beatae sunt. Ipsam debitis labore, deserunt, libero rerum laborum ea quibusdam.
         </p>
         <div className="buttons">
           <button> Projects </button>
           <button> Resume </button>
           <button> Contact </button>
         </div>
       </div>
      </div>
    );
  }
}

export default App;
