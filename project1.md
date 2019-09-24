## Project 1

In our first project, you'll get a server up and running, and write and deploy some React-based code using a node.js server. (OMG what does that all mean?)

The goals are:
- Build on knowledge of HTML/CSS.
- Learn basics of the React front-end library.
- Learn how to save data.
- Learn how web *browsers* interact with web *servers*.
- Get comfortable with the command line.
- Get experience with Google Cloud Platform.

### Week 1

First, we'll start with a refresher on HTML. Follow along!

Let's start with a very basic choose-your-own-adventure style website. Here's some code to get us started:

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text:
      "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
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
    var pageData = pages[this.state.page];
    
    return (
      <div className="App">
        <p>{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>{pageData.leftLabel}</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

#### Homework 1

This week's homework is to continue the exercises from class:

1. Add some extra pages to the Choose-your-own-Adventure

2. Add images to your pages.

3. **Challenge**: add the ability to specify up to five buttons per page. Bonus points for an arbitrary number! *Hint*: try using `if` statements in the `render()` function? Or, an array of buttons?

4. Learn a bit of CSS and style things! Make them pretty!

Submit your homework by exporting your project to GitHub by clicking on the GitHub icon (Octocat thing), then [emailing me](mailto:zamfi@cca.edu) the link to your GitHub repository.

[Here's a solution to buttons question that uses arrays](cyoa-buttons.js)


### Week 2

This week, we'll look at inputs: how do you actually collect data from a user? Let's start with this code:

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  name: {
    content: (name, changeName) => (
      <p>
        Greetings, traveler! What is your name?
        <br />
        <input type="text" value={name} onChange={changeName} />
      </p>
    ),
    buttons: [{ label: "Continue...", page: "start" }]
  },
  start: {
    content: (name, changeName) => (
      <p>Welcome, {name}! How would you like to get to your destination?</p>
    ),
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    content: () => (
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
      </p>
    ),
    buttons: [
      { label: "12E", page: "death" }, 
      { label: "97C", page: "life" }
    ]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "name"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var buttons = pageData.buttons.map(buttonData => (
      <button onClick={() => this.goToPage(buttonData.page)}>
        {buttonData.label}
      </button>
    ));

    return (
      <div className="App">
        {pageData.content(this.state.name, event =>
          this.setState({ name: event.target.value })
        )}
        {buttons}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
