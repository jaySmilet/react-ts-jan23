import * as React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../../feature/theme';

export interface color {
  name: string;
  id: number;
}

const ChangeColor = () => {
  const [color, setColor] = React.useState<color>(colors[0]);
  const dispatch = useDispatch();

  const handleChagne = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(colors.find((c) => c.id === +e.target.value));
  };

  React.useEffect(() => {
    dispatch(changeColor(color));
  }, [color]);

  return (
    <div className="changeColor">
      <select onChange={handleChagne}>
        {colors.map((c) => (
          <option value={c.id} key={c.id} selected={c.id == color.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ChangeColor;

const colors: color[] = [
  {
    name: 'dark',
    id: 1,
  },
  {
    name: 'light',
    id: 2,
  },
];
