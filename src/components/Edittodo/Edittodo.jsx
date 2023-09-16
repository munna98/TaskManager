import "./Edittodo.css";
export const Edittodo = ({handleEdit, saveEdit, editVal}) => {
  return (
    <div className="edit-todo-container">
      <div className="edit-todo">
        <input className="edit-todo-input"
          placeholder="Editing current Todo item..."
          type="text"
          name="edittodo"
          id=""
          onChange={handleEdit}
          value={editVal}
        />
        <button className="positive" onClick={()=>saveEdit()} >SAVE</button>
        <button className="negative">CANCEL</button>
      </div>
      <div className="line"></div>
    </div>
  );
};
