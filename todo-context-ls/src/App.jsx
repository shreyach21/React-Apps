import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm, TodoItem } from "./components";
const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  };
  const updateTodo = (id,todo) => {
    setTodos(prev=>prev.map(prevTodo=>(
      prevTodo.id===id ? todo :prevTodo
    )))
  };
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  };
  const toggleComplete = (id) => {
    setTodos(prevTodo=>prevTodo.map(todo=>(
      todo.id===id? {...todo,completed:!todo.completed} : todo
    )))
  };

  useEffect(()=>{
    const lsTodos=JSON.parse(localStorage.getItem("todos"))
    if(lsTodos && lsTodos.length>0){
      setTodos(lsTodos)
    }
  },[])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo)=>(
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todos}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};
export default App;
