import React from 'react';
import { TodoCounter } from './components/todo-counter/TodoCounter';
import { TodoSearch } from './components/todo-search/TodoSearch';
import { TodoList } from './components/todo-list/TodoList';
import { TodoItem } from './components/todo-items/TodoItem';
import { TodoCreate } from './components/todo-create/todo-create';
import { v4 as uuidv4 } from 'uuid';


const defaultTODO = [
  {  id: uuidv4(), text: 'Cortar cebolla', completed: false },
  {  id: uuidv4(), text: 'Tomar el curso de intro a React', completed: false },
  {  id: uuidv4(), text: 'Llorar con la llorona', completed: false },
  {  id: uuidv4(), text: 'LALALALLALLA' , completed: false },
];
function App() {
  // console.log("🚀 ~ defaultTODO:", defaultTODO)
  const total = 10000;
  const completed = 3;
  return (
    <>

      <TodoCounter completed={completed} total={total} />

      <TodoSearch />

      <TodoList>
        { defaultTODO.map(todo => (
          <TodoItem 
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>


      <TodoCreate />

    </>
  );
}

export {
  App
};
