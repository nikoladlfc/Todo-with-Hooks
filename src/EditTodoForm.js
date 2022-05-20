import React from "react";

// Material UI
import TextField from "@mui/material/TextField";

// Hooks
import useInputState from "./hooks/useInputState";
import { style, width } from "@mui/system";

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
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
        autoFocus
      ></TextField>
    </form>
  );
}

export default EditTodoForm;
