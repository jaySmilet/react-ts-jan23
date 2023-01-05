import * as React from 'react';

const A1 = () => {
  const [count, setCount] = React.useState<number>(0);
  const [todos, setTodos] = React.useState<any[]>([]);
  const calculation = expensiveCalculation(count);

  const addTodo = () => {
    setTodos((t) => [...t, `todo ${t.length + 1}`]);
  };

  const decrCount = () => {
    setCount((c) => c - 2);
  };

  return (
    <div>
      <div>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <p>Count {count}</p>
        <button onClick={decrCount}>--</button>
      </div>
      <hr />
      <div>{calculation}</div>
    </div>
  );
};
export default A1;

const expensiveCalculation = (v: number) => {
  for (let i = 1; i <= 999999999999; i++) {
    v++;
  }
  return v;
};
