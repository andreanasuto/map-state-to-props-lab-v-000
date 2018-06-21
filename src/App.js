import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        // {/* is there something we could connect to here? */}
<<<<<<< HEAD
        <ConnectedUsers />
=======
>>>>>>> 29d7ac8f2848273cebcf654d7f0a2f5549308567
      </div>
    );
  }
}

export default App;
