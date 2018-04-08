import React from 'react';

const EmployeeDetail = ({ employee }) => {      // we can use directly the property using es6 instead of using props.property
  const {name, phone, email, avatar} = employee; // same es6 syntax

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  )
};

export default EmployeeDetail
