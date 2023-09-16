import "./Todoitem.css";
export const Todoitem = ({ todoList, deleteTodo, strikeTodo, editTodo}) => {

  return (
    <div>
      {todoList.map((data) => {
        return (
          <div key={data.itemId}>
            <div className="todo-item">
              <p onClick={()=>strikeTodo(data.itemId)} id={data.itemId}>{data.item}</p>
              <i class="material-icons" 
              onClick={()=>editTodo(data.itemId)} id={data.itemId}>edit</i>
              <i class="material-icons" 
              onClick={()=>deleteTodo(data.itemId)} id={data.itemId} >delete</i>
            </div>
            <div className="line"></div>
          </div>
        )
      })}
    </div>
  );
};
// document.getElementById(data.itemId).style.color="#0c5488"