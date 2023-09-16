import "./Todoinput.css"
export const Todoinput = ({handleInput, addTodo,inputVal, checkingForEnterKey}) => {
  
  return (
    <div className="todo-input">
        <input className="new-todo" onKeyDown={checkingForEnterKey} type="text" value={inputVal} name="newtodo" id="" placeholder="New Todo" onChange={handleInput}/>
        <button className="positive" onClick={addTodo} >ADD TODO</button>
    </div>
  )
}

