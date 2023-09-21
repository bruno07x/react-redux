import { Provider as ProviderRedux } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

function App() {
  return (
    <>
      <div>
        <ProviderRedux store={store}>
          <TodoList />
          <AddTodo />
        </ProviderRedux>
      </div>
    </>
  );
}

export default App;
