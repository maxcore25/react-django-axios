import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000').then(res => {
      setEmployees(res.data);
    });
  }, []);
  console.log(employees);
  return (
    <div className='App'>
      <h1>Hello World</h1>
      {employees.map(employee => (
        <div key={employee.employee}>
          {employee.employee} - {employee.department}
        </div>
      ))}
    </div>
  );
}

export default App;
