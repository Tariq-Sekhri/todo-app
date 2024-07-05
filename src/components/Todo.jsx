
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";
import Footer from "./footer.jsx";

export default function Todo() {
const [todos, setTodos] = useState([]);
const completedTodos = todos.filter((todo) => todo.done).length
const totalTodos = todos.length  ;
    return <div>
     <Form todos={todos} setTodos={setTodos} />
     <TodoList  todos={todos} setTodos={setTodos}/>
<Footer completedTodos={completedTodos} totalTodos={totalTodos}  />
    </div>
}
