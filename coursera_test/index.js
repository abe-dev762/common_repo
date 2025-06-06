const employees = [
    {id: 1, name: 'John Doe' , age: 30, department: 'IT', salary: 50000 },
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000},
];

const totalEmployees = employees.map((employees, index) => `<p>${employees.id}: ${employees.name}: ${employees.age} - ${employees.department} - ${employees.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employees) => acc + employees.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHrEmployees() {
    const hrEmpoloyees = employees.filter(employee => employees.department == 'HR');
    const hrEmployeesDisplay = hrEmpoloyees.map((employee, index) => `<p>${employees.id}: ${employees.name}: ${employees.age} - ${employees.department} - $${employees.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }