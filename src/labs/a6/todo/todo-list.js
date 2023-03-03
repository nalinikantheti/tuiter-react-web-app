import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul>
       {
         todos.map(todo => {
           return(<li><TodoItem todo={todo}/></li>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;