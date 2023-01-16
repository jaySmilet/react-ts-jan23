import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';
import { addEmployee, deleteEmployee } from '../../feature/employee';
import { employee } from '../../static/data';
import './Employee.css';

const Employee = () => {
  const [username, setUsername] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const employees: employee[] = useSelector(
    (state: RootState) => state.employee.value
  );
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="add">
        <input
          type="text"
          placeholder="@username"
          className="formControl"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className="formControl"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="add"
          onClick={() =>
            dispatch(
              addEmployee({
                id: employees[employees.length - 1].id + 1,
                username,
                name,
              })
            )
          }
        >
          Add
        </button>
      </div>
      {employees.map((emp: employee) => {
        return (
          <div className="employee">
            <div className="update">
              <input
                type="text"
                placeholder="@username"
                className="formControl"
              />
              <input type="text" placeholder="Name" className="formControl" />
              <button className="update_button">Update</button>
            </div>
            <div className="display">
              <p>empId: {emp.id}</p>
              <p>Username: {emp.username}</p>
              <p>Name: {emp.name}</p>
              <button onClick={() => dispatch(deleteEmployee({ id: emp.id }))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Employee;
