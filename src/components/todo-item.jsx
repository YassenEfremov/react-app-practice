import './todo-item.css'

export function TodoItem({ title, done, removeItem, changeTitle, checkItem }) {

  return (
    <div className="todo__item">
      <input type="checkbox" onChange={checkItem} defaultChecked={done} />
      {title}
      <button onClick={removeItem}>❌</button>
      <button onClick={changeTitle}>✏️</button>
    </div>
  )
}