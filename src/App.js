import React from "react";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: "0",
      items: []
    };
    this.Order = this.Order.bind(this);
  }
  Order = async value => {
    const response = await fetch(
      "https://itunes.apple.com/search?term=" + value + "&entity=album"
    )
      .then(res => res.json())
      .catch();
    this.setState({
      items: response.results
    });
  };
  render() {
    return (
      <div>
        <Header search={this.Order} />
        <List list={this.state.items} />
      </div>
    );
  }
}

export default App;
