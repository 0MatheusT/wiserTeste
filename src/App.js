import React, {useEffect} from 'react'
import './App.css';
import axios from 'axios';

import Base from './Components/Base/Base'

function App() {

  useEffect(() => {
    axios.get("https://602e542f4410730017c50700.mockapi.io/user")
    .then((response) => {
      console.log(response.data)
    });
  });

  return (
    <div className="App">
      
      <Base />

    </div>
  );
}

export default App;
