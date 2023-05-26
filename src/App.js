import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import { Grid } from 'react-loader-spinner';


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <nav>
        <h1>Lorem</h1>
        <button onClick={getUsers}>Get Users</button>
      </nav>

      {isLoading ? (
        <div className="loader">
          <Grid type="Grid" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
