import React, { Component } from "react";
import Family from "./Family";
import MyContext, { MyProvider } from "./MyContext";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
