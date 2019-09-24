import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const pages = {
  start: {
    content: (
      <p>Welcome, traveler! How would you like to get to your destination?</p>
    ),
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    content: (
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
      </p>
    ),
    buttons: [
      { label: "12E", page: "death" }, 
      { label: "97C", page: "life" }]
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "start"
    };
  }
  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }
  render() {
    let pageData = pages[this.state.page];

    let buttons = [];
    for (var i = 0; i < pageData.buttons.length; i += 1) {
      let buttonData = pageData.buttons[i];
      buttons.push(
        <button onClick={() => this.goToPage(buttonData.page)}>
          {buttonData.label}
        </button>
      );
    }
    
    return (
      <div className="App">
        {pageData.content}
        {buttons}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
