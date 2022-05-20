import React from "react";
import Todo from "./Todo";

// Material UI
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo) => (
            <>
              <Todo
                task={todo.task}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    );

  return null;
}

export default TodoList;
