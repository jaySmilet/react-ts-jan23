import * as React from 'react';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Header from './components/Header/Header';
import { Employee } from './models/employee';
import { ViewOption } from './models/ViewOption.enum';
import './style.css';

export default function App() {
  const [employeeList, setEmployeeList] = React.useState<Employee[]>([
    { id: 1, name: 'Ajay', email: 'ajay@gmail.com', position: 'CTO' },
  ]);

  const [view, setView] = React.useState<ViewOption>(ViewOption.DEFAULT);

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

      {view == 'DEFAULT' && <EmployeeList eList={employeeList} />}
      {view == 'ADD' && (
        <AddEmployee backClick={() => setView(ViewOption.DEFAULT)} />
      )}
    </div>
  );
}
