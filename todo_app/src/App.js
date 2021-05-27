import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import firebase from "firebase";
import db from "./firebase";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log('😃', input);

  //when the app loads we want to listen to the db and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map(doc => doc.data()));
        setTodos(snapshot.docs.map((doc) => ({id: doc.id, todo: doc.data().todo})));
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    //on click method for button to add task
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>todo app 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input  value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add To do
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
