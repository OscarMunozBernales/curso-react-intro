import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">

      <TodoCounter />

      <TodoSearch />

      <TodoList>

        <TodoItem item={3} />
        <TodoItem />
        <TodoItem />
      </TodoList>


      <CreateTodoButton />

    </div>
  );
}

export { 
  App
};
