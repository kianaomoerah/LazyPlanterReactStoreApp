import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import firebase from './firebase.js';
import Inventory from './Inventory';
import Cart from './Cart';

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

  const [cartTotal, setCartTotal ] = useState(0)

  const addToCart = () => {

    console.log("added to cart")
    setCartTotal(cartTotal + 1)

  }
  

  return (
    <ul className="App">
      <Cart />
      <div>{cartTotal}</div>
      <Inventory plants={plants} addToCart={addToCart} />        
    </ul>
  );
}

export default App;
