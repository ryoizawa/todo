import React from "react";

const style = {
  backgroundColor: "burlywood",
  width: "400px",
  borderRadius: "10px",
  padding: "10px",
  margin: "10px",
  minHeight: "100px"
};

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">Incomplete Todos</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
