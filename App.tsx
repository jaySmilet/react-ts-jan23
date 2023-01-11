import * as React from 'react';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Header from './components/Header/Header';
import { Employee } from './models/employee';
import { ViewOption } from './models/ViewOption.enum';
import { EmpList } from './static/data';
import './style.css';

export default function App() {
  const [employeeList, setEmployeeList] = React.useState<Employee[]>(EmpList);

  const [view, setView] = React.useState<ViewOption>(ViewOption.DEFAULT);

  const deleteEmployee = (id: string) => {
    setEmployeeList((emp: Employee[]) => emp.filter((e) => id != e.id));
  };

  return (
    <div>
      <Header />
      {view != 'ADD' && (
        <button className="addButton" onClick={() => setView(ViewOption.ADD)}>
          <img
            src="https://icon-library.com/images/icon-add/icon-add-0.jpg"
            alt=""
          />
          Add Employee
        </button>
      )}

      {view == 'DEFAULT' && (
        <EmployeeList eList={employeeList} onDelete={deleteEmployee} />
      )}
      {view == 'ADD' && (
        <AddEmployee
          backClick={() => setView(ViewOption.DEFAULT)}
          addClick={(data) => setEmployeeList((el) => [...el, data])}
        />
      )}
    </div>
  );
}
