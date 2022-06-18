import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import firebase from './firebase.js';
import Header from './Header';
import Inventory from './Inventory';
// import Cart from './Cart';

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

  const [plantStock, setPlantStock] = useState("10")

  const addToCart = () => {

        if (plantStock > 0) {

            setPlantStock(plantStock - 1)

            setCartTotal(cartTotal + 1)
        }
    }

  // const addToCart = () => {

  //   console.log("added to cart")
  //   setCartTotal(cartTotal + 1)

  // }
  

  return (
      <>
        <Header />
        {/* <Cart /> */}
        <p>{cartTotal}</p>
        <ul>
          <Inventory plants={plants} addToCart={addToCart} />        
        </ul>
      </>
  );
}

export default App;
