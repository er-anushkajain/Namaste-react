import { useState } from 'react';

const UserCard = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="User-Card">
      <h2>Name: {name} </h2>
      <h3>location : sagar</h3>
      <h3>contact : 1234567890</h3>
    </div>
  );
};

export default UserCard;
