import React, { useEffect } from "react";
// Components
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
// Hooks
import useTodoState from "./hooks/useTodoState";
// Dependencies
import { v4 as uuidv4 } from "uuid";
// Material UI
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function TodoApp() {
  const initialTodos = JSON.parse(localStorage.getItem("todos") || "");

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify([...todos]), [todos]);
  });

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
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
