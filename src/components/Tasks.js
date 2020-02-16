import React from "react";

var active = false;
var del = null;

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Arrtask: [],
      index: 0,
      checked: "",
      del: null
    };
  }
  onDelete = index => {
    this.setState({
      index: index
    });
    active = true;
  };
  onRead = index => {
    this.setState({
      index: index
    });
    del = true;
  };
  //event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  render() {
    let Card;
    if (
      this.props.addTask !== "" &&
      !active &&
      this.props.addTask !== "delete" &&
      del === null
    ) {
      this.state.Arrtask.push(this.props.addTask);
    }
    if (active && this.props.addTask !== "delete" && del === null) {
      this.state.Arrtask.splice(this.state.index, 1);
      active = false;
    }
    if (this.props.addTask === "delete" && del === null) {
      this.state.Arrtask.splice(0);
    }
    if (del !== null) {
      let newList = this.state.Arrtask.splice(this.state.index, 1);
      newList = <del>{newList[0]}</del>;
      this.state.Arrtask.splice(this.state.index, 1, newList);
      del = null;
    }
    if (this.state.Arrtask.length !== 0 && del === null) {
      Card = this.state.Arrtask.map((item, index) => (
        <div key={index} className="card">
          <input
            className="edit"
            value="complete"
            type="button"
            onClick={this.onRead.bind(this, index)}
          />
          <hr className="Div" />
          <span
            className="buttonDelete"
            onClick={this.onDelete.bind(this, index)}
          >
            X
          </span>
          <div className="text">
            <p>{item}</p>
          </div>
        </div>
      ));
    }
    return <div className="ContentTask">{Card}</div>;
  }
}

export default ListView;
