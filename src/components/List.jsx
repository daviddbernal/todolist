import React from "react";

class List extends React.Component {
  render() {
    const List = this.props.list.map((item, index) => (
      <li key={index}>{item.collectionName}</li>
    ));
    return <ul>{List}</ul>;
  }
}

export default List;
