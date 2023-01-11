import * as React from 'react';
import { Employee } from '../../models/Employee';
import './ViewEmployee.css';

interface ViewEmployeeProps {
  isOpen?: boolean;
  data: Employee;
}

const ViewEmployee = ({ isOpen = false, data }: ViewEmployeeProps) => {
  console.log('data', data);
  return (
    <div className="view">
      <div className="view-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.id}</td>
              <td>{data?.name}</td>
              <td>{data?.email}</td>
              <td>{data?.position}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEmployee;
