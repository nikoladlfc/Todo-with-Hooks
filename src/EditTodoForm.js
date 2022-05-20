import React from "react";

// Material UI
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

// Hooks
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const cancelEditForm = () => {
    toggleEditForm();
  };
  return (
    <>
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
      <IconButton onClick={cancelEditForm}>
        <CancelIcon />
      </IconButton>
    </>
  );
}

export default EditTodoForm;
