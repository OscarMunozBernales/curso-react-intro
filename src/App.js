import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
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
  const completado = 3;
  return (
    <React.Fragment>

      <TodoCounter complete={completado} total={total} />

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


      <CreateTodoButton />

    </React.Fragment>
  );
}

export {
  App
};
