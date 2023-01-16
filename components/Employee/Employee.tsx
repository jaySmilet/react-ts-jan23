import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import { employee } from '../../static/data';
import './Employee.css';

const Employee = () => {
  const employees: employee[] = useSelector(
    (state: RootState) => state.employee.value
  );
  return (
    <div className="employee">
      {employees.map((emp: employee) => {
        return (
          <div className="display">
            <p>Username: {emp.username}</p>
            <p>Name: {emp.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
