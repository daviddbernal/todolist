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
    this.onTask = this.onTask.bind(this);
  }
  onTask = value => {
    this.setState({
      task: value
    });
  };
  ondeleteAll = Alldelete => {
    this.setState({
      task: Alldelete
    });
    console.log(Alldelete);
  };
  render() {
    return (
      <div>
        <Header AddTask={this.onTask} deleteAll={this.ondeleteAll} />
        <ListView addTask={this.state.task} />
      </div>
    );
  }
}

export default App;
