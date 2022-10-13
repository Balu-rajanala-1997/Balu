import React from "react";

export default function Home2() {
  const students = {
    Name: "Gopi Nadh",
    Id: 100,
    Addr: "Chennai",
    Email: "balurajanala3@gmail.com",
  };

  return (
    <div className="container-fluid bg-light text-black p-4" style={{height: '550px'}}>
      <h3>Students Details</h3>
      <dl className="p-3">
        <dt>Name</dt>
        <dd>{students.Name}</dd>
        <dt>Id</dt>
        <dd>{students.Id}</dd>
        <dt>Addr</dt>
        <dd>{students.Addr}</dd>
        <dt>Email</dt>
        <dd>{students.Email}</dd>
      </dl>
      <br/>

      
    </div>
  );
}
