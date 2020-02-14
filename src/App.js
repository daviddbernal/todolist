import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListView from "./components/Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.task = this.task.bind(this);
  }
  task = value => {
    this.setState({
      task: value
    });
  };
  render() {
    return (
      <div>
        <Header AddTask={this.task} />
        <ListView task={this.state.task} />
      </div>
    );
  }
}

export default App;
