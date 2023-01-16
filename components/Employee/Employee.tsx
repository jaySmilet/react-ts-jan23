import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from '../../feature/employee';
import { employee } from '../../static/data';
import './Employee.css';

const Employee = () => {
  const [username, setUsername] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [newUsername, setNewUsername] = React.useState<string>('');
  const [newName, setNewName] = React.useState<string>('');
  let employees: employee[] = useSelector(
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
          className="add_button"
          onClick={() =>
            dispatch(
              addEmployee({
                id:
                  employees.length > 0
                    ? employees[employees.length - 1].id + 1
                    : 1,
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
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                className="formControl"
                onChange={(e) => setNewName(e.target.value)}
              />
              <button
                className="update_button"
                onClick={() =>
                  dispatch(
                    updateEmployee({
                      id: emp.id,
                      name: newName,
                      username: newUsername,
                    })
                  )
                }
              >
                Update
              </button>
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
