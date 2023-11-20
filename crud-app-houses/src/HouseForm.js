
//*---This form plays a role in the CRUD Operations by providing a form for user input.---*//

import React, { useState } from 'react';

const HouseForm = ({ house = {}, onSubmit }) => {
  const [name, setName] = useState(house.name || '');
  const [address, setAddress] = useState(house.address || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address });
    setName('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HouseForm;
