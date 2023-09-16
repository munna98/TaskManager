import "./App.css";
import { Edittodo } from "./components/Edittodo/Edittodo";
import { Header } from "./components/Header/Header";
import { Todoinput } from "./components/Todoinput/Todoinput";
import { Todoitem } from "./components/Todoitem/Todoitem";
import { useState } from "react";
const App = () => {
  const [todoId, settodoId] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const [editVal, setEditVal] = useState("");
  const [editvalId, seteditvalId] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [textCross, settextCross] = useState(false);
  
  const checkingForEnterKey = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };
  const handleInput = (e) => setInputVal(e.target.value);
  const handleEdit = (e) => setEditVal(e.target.value);

  const addTodo = () => {
    inputVal &&
      setTodoList((prev) => [{ item: inputVal, itemId: todoId }, ...prev]);
    settodoId((prev) => prev + 1);
    setInputVal("");
  };

  const deleteTodo = (deleteId) => {
    setTodoList((prev) => prev.filter((data) => data.itemId !== deleteId));
  };

  const strikeTodo = (strikeId) => {
    textCross
      ? (document.getElementById(strikeId).style.textDecoration = "none")
      : (document.getElementById(strikeId).style.textDecoration =
          "line-through");
    settextCross((prev) => !prev);
  };

  const editTodo = (editId) => {
    seteditvalId(editId);
  };

  const saveEdit = () => {

    const newArray = todoList.map((data) => {
      if (data.itemId != editvalId) {
        return { item: data.item, itemId: data.itemId };
      } else {
        return { item: editVal, itemId: data.itemId };
      }
    });
    editVal&&
    setTodoList(newArray);
    setEditVal("");
  };
  return (
    <div className="todo-container">
      <Header />
      <Todoinput
        handleInput={handleInput}
        addTodo={addTodo}
        inputVal={inputVal}
        checkingForEnterKey={checkingForEnterKey}
      />
      <Todoitem
        todoList={todoList}
        deleteTodo={deleteTodo}
        todoId={todoId}
        strikeTodo={strikeTodo}
        editTodo={editTodo}
      />
      <Edittodo editVal={editVal} handleEdit={handleEdit} saveEdit={saveEdit} />
    </div>
  );
};

export default App;
