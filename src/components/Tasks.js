import React from "react";

var active = false;

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Arrtask: [],
      index: 0
    };
  }
  onDelete = index => {
    this.setState({
      index: index
    });
    active = true;
  };
  //event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  render() {
    let Card;
    if (this.props.addTask !== "" && !active) {
      this.state.Arrtask.push(this.props.addTask);
    } else {
      this.state.Arrtask.splice(this.state.index, 1);
      active = false;
    }
    if (this.state.Arrtask.length !== 0) {
      Card = this.state.Arrtask.map((item, index) => (
        <div key={index} className="card">
          <button onClick={this.onDelete.bind(this, index)}>x</button>
          <div>{item}</div>
        </div>
      ));
    }
    return <div className="ContentTask">{Card}</div>;
  }
}

export default ListView;
