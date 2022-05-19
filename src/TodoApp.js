import React, { useState } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// Material UI
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean fishtank", completed: false },
    { id: 2, task: "Wash car", completed: true },
    { id: 3, task: "Grow beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  return (
    <Paper elevation={0} style={{ height: "100vh", padding: 0, margin: 0 }}>
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography>Todo with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
