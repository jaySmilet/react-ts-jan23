import * as React from 'react';
import './EmployeeList.css';
import { Employee } from '../../models/employee';

interface EmployeeListProps {
  eList: Employee[];
}

const EmployeeList = ({ eList }: EmployeeListProps) => {
  return (
    <React.Fragment>
      <div className="listTop">
        <h3>Employee List</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {eList.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.position}</td>
                <td>
                  <button>
                    <img
                      src="https://freeiconshop.com/wp-content/uploads/edd/eye-outline.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      src="https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png"
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default EmployeeList;
