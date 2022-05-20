import React from "react";

// Material UI
import TextField from "@mui/material/TextField";

// Hooks
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
      ></TextField>
    </form>
  );
}

export default EditTodoForm;
