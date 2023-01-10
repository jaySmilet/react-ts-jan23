import * as React from 'react';
import { Employee } from '../../models/employee';
import { EmployeePosition } from '../../models/EmployeePosition.enum';
import './AddEmployee.css';

interface AddEmployeeProps {
  backClick: () => void;
}

const AddEmployee = ({ backClick }: AddEmployeeProps) => {
  const [employee, setEmployee] = React.useState<Employee>({
    id: new Date().toDateString(),
    name: '',
    email: '',
    position: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmployee((emp) => {
      return { ...emp, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="addEmployee">
      <h3>ADD EMPLOYEE</h3>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={employee.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Position</label>
          <select>
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
          <button>ADD</button>
          <button onClick={backClick}>BACK</button>
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
