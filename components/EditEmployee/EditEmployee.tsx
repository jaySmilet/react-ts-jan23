import * as React from 'react';
import { Employee } from '../../models/Employee';
import { EmployeePosition } from '../../models/EmployeePosition.enum';
import './EditEmployee.css';

interface EditEmpProps {
  data: Employee;
  backClick: () => void;
  saveClick: (data: Employee) => void;
}

const EditEmployee = ({ data, backClick, saveClick }: EditEmpProps) => {
  const [employee, setEmployee] = React.useState<Employee>(data);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmployee((emp) => {
      return { ...emp, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveClick(employee);
    backClick();
  };

  return (
    <div className="edit">
      <h3>EDIT EMPLOYEE</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={employee.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={employee.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <select name="position" onChange={handleChange}>
            {EmployeePosition.map((ep, i) => {
              return (
                <option key={i} value={ep} selected={ep == employee.position}>
                  {ep}
                </option>
              );
            })}
          </select>
        </div>
        <div className="actionBtn">
          <button type="submit">SAVE</button>
          <button onClick={backClick}>BACK</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
