import './App.css';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'
import { Link } from 'react-router-dom';
import firebase from './firebase.js';
import Inventory from './Inventory';
import Cart from './Cart';

const Home = () => {


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

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  };

  const [cart, setCart ] = useState([])

  const [ cartTotal, setCartTotal ] = useState(0)

  const addToCart = (plant) => {

            setCartTotal(cartTotal + 1)

            const copyOfCart = [...cart];

            copyOfCart.push(plant)

            setCart(copyOfCart);            
        }

  return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to="/water">Watering Your Plants</Link>
                </li>
                <li>
                    <Link to="/light">Light For Your Indoor Plants</Link>
                </li>
            </ul>
        </nav>
        <Cart cart={cart} setCart={setCart} cartTotal ={cartTotal} setCartTotal={setCartTotal}/>
        <button onClick={handleScroll} className="scrollButton">↑</button>
        <Inventory plants={plants} addToCart={addToCart} cart={cart}/>   
      </>
  );


}

export default Home;