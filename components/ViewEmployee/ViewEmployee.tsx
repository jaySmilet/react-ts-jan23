import * as React from 'react';
import { Employee } from '../../models/Employee';
import './ViewEmployee.css';

interface ViewEmployeeProps {
  onClose: () => void;
  data: Employee;
}

const ViewEmployee = ({ onClose, data }: ViewEmployeeProps) => {
  return (
    <div className="view">
      <div className="view-content">
        <button className="closeBtn" onClick={onClose}>
          <img
            src="https://cdn.faruzo.com/wp-content/uploads/greek-cross-2.jpg"
            alt="close_btn"
          />
        </button>
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
