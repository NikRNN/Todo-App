import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function Todoform(props) {
  const { addTodo } = props;

  const [text, setText] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter new Todo"
        ></input>
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Todoform;
