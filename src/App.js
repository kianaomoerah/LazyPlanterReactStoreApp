// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import firebase from './firebase.js';
import Header from './Header';
import Inventory from './Inventory';
import Cart from './Cart';

function App() {

  const [plants, setPlants] = useState([]);

  useEffect(()=> {

    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (response) => {

      const newState = [];

      const data = response.val();

      for (let key in data) {

        newState.push({key: key, name: data[key].name, photo: data[key].photo, price: data[key].price, stock: data[key].stock })
      }
          setPlants(newState)
      
    })
  }, [])

 
  // useState for cart array
  const [cart, setCart ] = useState([])

  // const [plantStock, setPlantStock] = useState("10")

  // useState for the number of items in cart
  const [ cartTotal, setCartTotal ] = useState(0)

  const addToCart = (plantName) => {

            setCartTotal(cartTotal + 1)

            // create a copy of the array in state so that we do not alter our original array
            const copyOfCart = [...cart];

            copyOfCart.push(plantName)

            setCart(copyOfCart);
                        
        }

  return (
      <>

        <Header />
        <Cart cart={cart} setCart={setCart} cartTotal ={cartTotal} setCartTotal={setCartTotal}/>
        <Inventory plants={plants} addToCart={addToCart} cart={cart}/>   

      </>
  );
}

export default App;