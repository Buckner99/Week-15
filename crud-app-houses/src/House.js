import React, { useState } from 'react';
import HouseForm from './HouseForm';

const House = ({ house, onUpdate, onDelete }) => {
  const [isEditing, setEditing] = useState(false);

  const handleUpdate = (updatedHouse) => {
    onUpdate(updatedHouse);
    setEditing(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {isEditing ? (
        <HouseForm house={house} onSubmit={handleUpdate} />
      ) : (
        <>
          <h3>{house.name}</h3>
          <p>{house.address}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default House;
