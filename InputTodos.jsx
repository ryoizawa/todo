import React from "react";

const style = {
  backgroundColor: "aquamarine",
  width: "400px",
  height: "30px",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px"
};

export const InputTodos = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="Enter Todo"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>
        Add
      </button>
    </div>
  );
};
