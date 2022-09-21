import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input form-control"
          value={value}
          placeholder="What needs to be done?"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
    }
export default ToDoForm;