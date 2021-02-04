import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMsg = "xrissy pizza"
    };
  }

  render() {
    const welcomeMsg = this.state;
    const greet = () => welcomeMsg.greet
  }

  return() {
    <div>
      <h1>hello steve {this.welcomeMsg.greet}</h1>
    </div>;
  }
}

export default App;
