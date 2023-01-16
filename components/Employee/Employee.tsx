import * as React from 'react';
import { useSelector } from 'react-redux';
import './Employee.css';

const Employee = () => {
  const employees = useSelector((state) => state.value);
  return (
    <div className="employee">
      <div className="display">
        <p>Username: {}</p>
        <p>Name</p>
      </div>
    </div>
  );
};

export default Employee;
