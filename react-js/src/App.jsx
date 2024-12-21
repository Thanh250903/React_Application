import TodoInput from "./components/ToDoInput"
import TodoList from "./components/TodoList"

function App() { // App này là components cha
 // gọi 2 components là TodoInput và ToDoList
 // App này sẽ render ra màn hình cha 2 components là TodoInpu và TodoList
  return (
    <> 
    <TodoInput /> 
    <TodoList />
    </>
  )
}

export default App
