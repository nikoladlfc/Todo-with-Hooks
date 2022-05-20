import React from "react";

// Components
import EditTodoForm from "./EditTodoForm";

// Hooks
import useToggleState from "./hooks/useToggleState";

// Material UI
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import DeleteIcon from "@mui/icons-material/Delete";
import EditButton from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px", paddingTop: 0 }}>
      {isEditing ? (
        <EditTodoForm
          value={task}
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
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
            <IconButton onClick={() => toggle(id)}>
              <EditButton aria-label='Edit' />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
