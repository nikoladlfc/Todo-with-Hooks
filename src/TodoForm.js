import React from "react";

// Hooks
import useInputState from "./hooks/useInputState";

// Material UI
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ padding: "0", margin: "1rem 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;
