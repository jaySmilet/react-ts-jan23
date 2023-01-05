import * as React from 'react';

interface B_Props {
  todos: any[];
  addTodo: () => void;
}

const B = ({ todos, addTodo }: B_Props) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <h5 key={index}>{todo}</h5>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default B;
