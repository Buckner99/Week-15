import React, { useState, useEffect } from 'react';
import axios from 'axios';
import House from './House';
import HouseForm from './HouseForm';

const API_URL = 'https://655aa9516981238d054d9ffe.mockapi.io/House_API/Houses'; 

const App = () => {
  const [houses, setHouses] = useState([]);
//*--- This code fetches the list of houses from the API when the component mounts and sets the state with the retreived data.---*//
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setHouses(response.data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);

//*--- The 'addHouse' function is responsible for creating a new house and adding it to the list.---*//
//*---This code sends a POST request to the API with the new house data. Upon a successful response, it updates the state by adding the new house to the existing list.---*//
  
const addHouse = (house) => {
    axios.post(API_URL, house)
      .then(response => setHouses([...houses, response.data]))
      .catch(error => console.error('Error adding house:', error));
  };

//*---The updateHouse function is responsible for updating an existing house.---*//
//*---This code sends a PUT request to the API with the updated house data. Upon success,---*// 
//*---it updates the state by mapping over the existing houses and replacing the one with the matching ID.---*//
  

const updateHouse = (id, updatedHouse) => {
    axios.put(`${API_URL}/${id}`, updatedHouse)
      .then(response => setHouses(houses.map(house => (house.id === id ? response.data : house))))
      .catch(error => console.error('Error updating house:', error));
  };

//---*The deleteHouse function is responsible for deleting an existing house.---*//
//---*This code sends a DELETE request to the API with the ID of the house to be deleted. Upon success, it updates the state by filtering out the deleted house.---*//

  const deleteHouse = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setHouses(houses.filter(house => house.id !== id)))
      .catch(error => console.error('Error deleting house:', error));
  };

  return (
    <div>
      <h1>House Management</h1>
      <HouseForm onSubmit={addHouse} />
      <div>
        {houses.map((house) => (
          <House
            key={house.id}
            house={house}
            onUpdate={(updatedHouse) => updateHouse(house.id, updatedHouse)}
            onDelete={() => deleteHouse(house.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


//*---These four operations together implement the basic CRUD functionality in the React application.---*// 
//*---The HouseForm component also plays a role in the Create and Update operations by providing a form for user input.---*//