import * as React from 'react';
import B from '../A/B/B';

const A = () => {
  const [count, setCount] = React.useState<number>(0);
  const [todos, setTodos] = React.useState<any[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodos = React.useCallback(() => {
    setTodos((t) => [...t, `The new todo ${t.length + 1}`]);
  }, [todos]);
  console.warn('A');
  return (
    <div>
      <B todos={todos} addTodo={addTodos} />
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>++</button>
      </div>
    </div>
  );
};
export default A;
