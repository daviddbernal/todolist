import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.value);
  };
  render() {
    return (
      <div className="ContentHeader">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <input type="submit" onClick={this.handleSubmit} value="toSend" />
        </form>
      </div>
    );
  }
}

export default Header;
