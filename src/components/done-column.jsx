import './todo-item.css'
import { TodoItem } from './todo-item';

export function DoneColumn({ removeTodo, changeTitle, checkTodo, renamedIndex, todos }) {

  return (
    <div className="todo__column">
      <h1>Done</h1>
      {
        todos.map((todo, index) => {
          if (todo.isDone) {
            return (
              <div>
                <TodoItem
                  key={index}
                  itemIndex={index}
                  title={todo.title}
                  done={todo.isDone}
                  removeItem={() => removeTodo(index)}
                  changeTitle={() => changeTitle(index)}
                  checkItem={() => checkTodo(index)}
                />
                {
                  (index == renamedIndex) ?
                    <input id="updateTaskInput"
                          placeholder="New title"
                          defaultValue={todo.title}/>
                  : ""
                }
              </div>
            );
          }
        })
      }
    </div>
  )
}