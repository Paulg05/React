import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Modal,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Todo.css";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
    border: "2px solid grey",

  },
  delete: {
    cursor: "pointer"
  }
  
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am Modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className={classes.list} >
        <ListItem >
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Deadline" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          className={classes.delete}
      onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
