import React from "react";

// Material UI
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import DeleteIcon from "@mui/icons-material/Delete";
import EditButton from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

function Todo({ task, id, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox
        tabIndex={-1}
        checked={completed}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon aria-label='Delete' />
        </IconButton>
        <IconButton>
          <EditButton aria-label='Edit' />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
