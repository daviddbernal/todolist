import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      index: -1,
      prevTask: ""
    };
    // this.onTask = this.onTask.bind(this);
  }
  addTask = value => {
    if (value !== "") {
      this.state.tasks.push(value);
    }
    this.setState({
      tasks: this.state.tasks
    });
  };
  ondeleteAll = () => {
    this.state.tasks.splice(0);
    this.setState({
      tasks: this.state.tasks
    });
  };
  deleteTask = index => {
    this.state.tasks.splice(index, 1);
    this.setState({
      tasks: this.state.tasks
    });
  };
  onRead = index => {
    let newList = this.state.tasks.splice(index, 1);
    if (this.state.index !== index) {
      this.state.tasks.splice(index, 0, <del>{newList[0]}</del>);
      this.setState({
        tasks: this.state.tasks,
        index: index,
        prevTask: newList
      });
    } else {
      this.state.tasks.splice(index, 0, this.state.prevTask);
      this.setState({
        tasks: this.state.tasks,
        index: -1,
        prevTask: ""
      });
    }
  };
  render() {
    return (
      <div>
        <Header addTask={this.addTask} deleteAll={this.ondeleteAll} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          onRead={this.onRead}
        />
      </div>
    );
  }
}

export default App;
