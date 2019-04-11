import React, {Component} from 'react';

import './App.css';
import {Login} from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login
          handleSubmit={async (values) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                alert(JSON.stringify(values, null, 2));
              }, 400);
            });
          }}
        />
      </div>
    );
  }
}

export default App;
