import firebase from './firebase';
import {useState} from 'react';
import { getDatabase } from 'firebase/database';

// const database = getDatabase(firebase)
// cons


const Inventory = (props) => {

    const plants = (props.plants) 

    // const [stock, setStock] = useState(plant.stock)

    // console.log(plants)


    return (

        <>
        {/* //  <ul> */}
        
        {
            plants.map((plant) => {


                return (
                    <li>
                    <img src="{plant.photo}"/>
                    <p>{plant.name}</p>
                    <p>{plant.price}</p>
                    <p>{plant.stock}</p>
                    <button onClick={ props.addToCart }>Add to cart</button>
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