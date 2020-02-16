import React from "react";

const Tasks = props => {
  const onDelete = index => {
    props.deleteTask(index);
  };
  const onRead = index => {
    props.strikethrough(index);
  };
  const cards = props.tasks.map((item, index) => (
    <div key={index} className="card">
      <input
        className="edit"
        value="complete"
        type="button"
        onClick={() => onRead(index)}
      />
      <hr className="Div" />
      <span className="buttonDelete" onClick={() => onDelete(index)}>
        X
      </span>
      <div className="text">
        <p>{item}</p>
      </div>
    </div>
  ));

  return <div className="ContentTask">{cards}</div>;
};

export default Tasks;
