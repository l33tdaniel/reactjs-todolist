import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
    // Seeing <> is a "fragment"
    // The function name is always capitalized just like how the name of the component file name is always capitalized

    return (
      <>
        <main>
            <TodoInput/>
            <TodoList/>
        </main>
      </>
    )
}

export default App
