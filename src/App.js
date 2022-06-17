import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import firebase from './firebase.js';
import Inventory from './Inventory';

function App() {


  const [plants, setPlants] = useState([]);

  useEffect(()=> {

    

    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (response) => {

      // console.log (response.val());
      const newState = [];

      const data = response.val();

      for (let key in data) {

        newState.push({key: key, name: data[key].name, photo: data[key].photo, price: data[key].price, stock: data[key].stock })
      }
          setPlants(newState)
      
    })
  }, [])

  // console.log(plants);

  return (
    <ul className="App">
      <Inventory plants={plants}/>        
    </ul>
  );
}

export default App;
