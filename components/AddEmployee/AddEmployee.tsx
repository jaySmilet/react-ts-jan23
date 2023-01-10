import * as React from 'react';
import { Employee } from '../../models/employee';
import { EmployeePosition } from '../../models/EmployeePosition.enum';
import './AddEmployee.css';

interface AddEmployeeProps {
  backClick: () => void;
  addClick: (data: Employee) => void;
}

const AddEmployee = ({ backClick, addClick }: AddEmployeeProps) => {
  const [employee, setEmployee] = React.useState<Employee>({
    id: new Date().getTime().toString(),
    name: '',
    email: '',
    position: EmployeePosition[0],
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmployee((emp) => {
      return { ...emp, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addClick(employee);
    backClick();
  };
  return (
    <div className="addEmployee">
      <h3>ADD EMPLOYEE</h3>
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
                <option key={i} value={ep}>
                  {ep}
                </option>
              );
            })}
          </select>
        </div>
        <div className="actionBtn">
          <button type="submit">ADD</button>
          <button onClick={backClick}>BACK</button>
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
