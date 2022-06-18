import firebase from './firebase';
import {useState} from 'react';
import { getDatabase } from 'firebase/database';

// const database = getDatabase(firebase)
// cons


const Inventory = (props) => {

    const plants = (props.plants) 

    // const [stock, setStock] = useState(plant.stock)

    // console.log(plants)

    const [plantStock, setPlantStock] = useState("10")

    const handleStock = () => {

        if (plantStock > 0) {

            setPlantStock(plantStock - 1)
        }
    }


    return (

        <>
        {/* //  <ul> */}
        
        {
            plants.map((plant) => {


                return (
                    <li>
                    <img src="https://images.unsplash.com/photo-1646667687331-e06974a7fda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>
                    <p>{plant.name}</p>
                    <p>CAD ${plant.price}.00</p>
                    <p>Stock available: {plant.stock}</p>
                    <button onClick={props.addToCart}>Add to cart</button>
                    </li>
                   
                )

            })
        }
        {/* //  </ul> */}
        </>
    )
}


export default Inventory;

             {/* <li>
            <img src="" alt="" />
            <h2>{props.plantName}</h2>
        </li> */}