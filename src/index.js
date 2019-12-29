import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
  /*****************************************
   *          Constructor section          *
   *****************************************/
  constructor(props) {
    super(props);
    this.state = {
      display: 'Display'
    };
  };
  /*****************************************
   *          Cycles                       *
   *****************************************/
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  /*****************************************
   *          Methods                      *
   *****************************************/
  handleClick = event => {
    let audioEl = document.getElementById(event.target.id).children[0];
    this.setState({
      display: event.target.id
    });
    audioEl.play();
  };

  handleKeyPress = event => {
    switch (event.keyCode) {
      case 81:
      case 87:
      case 69:
      case 65:
      case 83:
      case 68:
      case 90:
      case 88:
      case 67:
        let keyId = event.key.toUpperCase();
        let parentId = document.getElementById(keyId).parentNode.id;
        let audioEl = document.getElementById(keyId);
        this.setState({
          display: parentId
        });
        audioEl.play();
        break;
      default:
        break;
    }
  }

  /*****************************************
   *            Render section             *
   *****************************************/
  render() {
    return (
      <div id='drum-machine' className='container mt-4 mx-auto p-4 text-center'>
        {/* Header */}
        <header id='header-id' className='text-info m-2'>Drum machine <i className="fab fa-free-code-camp"></i></header>
        {/* Main */}
        <main id='main-id'>
          {/* Display */}
          <section id='display-section'>
            <div id='display' className='text-info my-2 mx-auto bg-dark border border-primary rounded'>{this.state.display}</div>
          </section>
          {/* Pads */}
          <section id='pads-section' className='mt-4'>
            <div>
              <button id='Heater-1' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>Q
                <audio id='Q' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
              </button>
              <button id='Heater-2' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>W
                <audio id='W' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
              </button>
              <button id='Heater-3' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>E
                <audio id='E' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
              </button>
            </div>
            <div>
              <button id='Heater-4' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>A
                <audio id='A' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
              </button>
              <button id='Clap' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>S
                <audio id='S' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
              </button>
              <button id='Open-HH' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>D
                <audio id='D' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
              </button>
            </div>
            <div>
              <button id="Kick-n'-Hat" className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>Z
                <audio id='Z' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
              </button>
              <button id='Kick' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>X
                <audio id='X' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
              </button>
              <button id='Closed-HH' className='drum-pad btn btn-lg btn-outline-info' onClick={this.handleClick}>C
                <audio id='C' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
              </button>
            </div>
          </section>
        </main>
        <footer>
          <div className='contact text-white small mt-3'>Coded by <code>r4ngel93</code></div>
          <div>

            <a href='https://github.com/R4ngel93' target="_blank"><i className=" fab fa-github mx-1"></i></a>
            <a href='https://twitter.com/OscarRa65705186' target='_blank'><i className="fab fa-twitter mx-1"></i></a>
            <a href='https://www.freecodecamp.org/r4ngel93' target='_blank'><i className="fab fa-free-code-camp mx-1"></i></a>

          </div>
        </footer>
      </div >
    );
  };
}


ReactDOM.render(<App />, document.getElementById('root'));

