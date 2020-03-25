import React from "react";

const Tasks = props => {
  const cards = props.tasks.map((item, index) => (
    <div key={index} className="card">
      <input
        className="edit"
        value="complete"
        type="button"
        onClick={() => props.onRead(index)}
      />
      <hr className="Div" />
      <span className="buttonDelete" onClick={() => props.deleteTask(index)}>
        X
      </span>
      <div className="text">{<p>{item}</p>}</div>
    </div>
  ));
  return <div className="ContentTask">{cards}</div>;
};

export default Tasks;
