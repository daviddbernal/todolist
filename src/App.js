import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    // this.onTask = this.onTask.bind(this);
  }
  addTask = value => {
    this.state.tasks.push(value);
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
  strikethrough = index => {
    let newList = this.state.tasks.splice(index, 1);
    this.state.tasks.splice(index, 0, <del>{newList[0]}</del>);
    this.setState({
      tasks: this.state.tasks
    });
    console.log(this.state.tasks);
  };
  render() {
    return (
      <div>
        <Header addTask={this.addTask} deleteAll={this.ondeleteAll} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          strikethrough={this.strikethrough}
        />
      </div>
    );
  }
}

export default App;
