import React from "react";

const style = {
  backgroundColor: "deeppink",
  width: "400px",
  borderRadius: "10px",
  margin: "10px",
  padding: "10px",
  minHeight: "100px"
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div style={style}>
      <p className="title">Complete Todos</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickReturn(index);
                }}
              >
                Return
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
