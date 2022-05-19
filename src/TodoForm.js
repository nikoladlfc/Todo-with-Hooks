import React from "react";
import useInputState from "./hooks/useInputState";

// Material UI
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange}></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;
