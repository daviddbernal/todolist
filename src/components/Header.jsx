import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  addTask = () => {
    this.props.addTask(this.state.value);
    this.setState({
      value: ""
    });
  };
  onDelete = () => {
    this.props.deleteAll();
  };
  render() {
    return (
      <div className="contentHeader">
        <input
          onChange={this.handleChange}
          className="Itext"
          type="text"
          value={this.state.value}
          placeholder="write your task"
        />
        <input
          type="button"
          className="deleteAll"
          value="delete All"
          onClick={this.onDelete}
        />
        <input
          className="Ibutton"
          type="button"
          value="add Task"
          onClick={this.addTask}
        />
      </div>
    );
  }
}

export default Header;
