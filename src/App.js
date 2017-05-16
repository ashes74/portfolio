import React, {Component} from 'react';
import logo_black from '../public/img/logos/L -logo-black.png'
import './styles/App.css';
import Button from './components/Button.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="id-panel">
          <img src={logo_black} alt="LA logo"/>
        </div>
        <div className="content-panel">
          <h2> From the desk of Lori-Anne Ashwood </h2>
          <p>
            Hi! I'm Lori
          </p>
          <p>
            I am a fullstack software engineer (mostly Javascript) and budding project manager and developer evangelist.
          </p>
          <p>
            I work for include.io ( in beta) and travel regularly to promote our product and
            learn from users the best ways to improve.
          </p>
          <p>
            I LOVE soccer! I used to play almost every Sunday for up to 3 hours (looking for
            a new team). I enjoy screaming at the TV during Champions League, La Liga and
            Europa cup matches.
          </p>
          <div className="buttons">
            <Button content="Projects"/>
            <Button content="Resume"/>
            <Button content="Contact"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
