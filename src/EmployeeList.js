import React from "react";

export default function EmployeeList(props) {

  const sayHello = (name) => {
    alert(`Welcome ${name}`)
  }

  return (
    <div>
      {
        props.data.map((emp) => (
          <>
            <li>
              {emp.id}, {emp.name}, {emp.age}
            </li>
            <button onClick={() => sayHello(emp.name)}>Print Name</button>
          </>
        ))
      }

    </div>
  );
}
