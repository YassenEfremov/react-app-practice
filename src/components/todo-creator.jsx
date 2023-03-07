import "./todo-creator.css";

export function TodoCreator({ createTodo }) {

  const sumbitTheForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoTitle = form.todoTitle;
    createTodo(todoTitle.value);
  }

  return (
    <div className="todo-form">
      <label>Add todo</label>
      <form onSubmit={sumbitTheForm}>
        <div>
          <input type="text" name="todoTitle" placeholder="Todo title" />
          <button type="submit">➕</button>
        </div>
      </form>
    </div>
  );
}
