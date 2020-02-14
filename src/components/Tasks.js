import React from "react";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards: [],
      other: ""
    };
  }
  render() {
    if (this.props.task !== "") {
      this.state.Cards.push(<div className="text">{this.props.task}</div>);
      this.state.other = this.state.Cards.map((item, index) => (
        <div key={index} className="card">
          <button className="remove">X</button>
          {item}
          <button className="expand">read more</button>
        </div>
      ));
    }
    return <div className="ContentTask">{this.state.other}</div>;
  }
}

export default ListView;
