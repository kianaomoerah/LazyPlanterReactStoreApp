import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import firebase from './firebase.js';
import Header from './Header';
import Inventory from './Inventory';
import Cart from './Cart';
import Footer from './Footer';

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

  const [cart, setCart ] = useState([])

  const [ cartTotal, setCartTotal ] = useState(0)

  const addToCart = (plantName) => {

            setCartTotal(cartTotal + 1)

            const copyOfCart = [...cart];

            copyOfCart.push(plantName)

            setCart(copyOfCart);            
        }

  return (
      <>
        <Header />
        <Cart cart={cart} setCart={setCart} cartTotal ={cartTotal} setCartTotal={setCartTotal}/>
        <Inventory plants={plants} addToCart={addToCart} cart={cart}/>   
        <Footer />
      </>
  );
}

export default App;