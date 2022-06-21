// import firebase from './firebase';
// import {useState} from 'react';
// import { getDatabase } from 'firebase/database';

// const database = getDatabase(firebase)
// cons


const Inventory = (props) => {

    const plants = (props.plants) 

    // const [stock, setStock] = useState(plant.stock)

    // console.log(plants)

    // const [plantStock, setPlantStock] = useState("10")

    // const handleStock = () => {

    //     if (plantStock > 0) {

    //         setPlantStock(plantStock - 1)
    //     }
    // }


    return (

        <>
        {/* //  <ul> */}
        
        {
            plants.map((plant) => {

                // console.log(plant)

                const defaultImage = "https://images.unsplash.com/photo-1646667687331-e06974a7fda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"

                const altText = `a ${plant.name}`

                return (
                    <li key={plant.key}>
                    <img src={plant.photo ? plant.photo : defaultImage } alt= {altText}/>
                    <p>{plant.name}</p>
                    <p>CAD ${plant.price}.00</p>
                    {/* <p>Stock available: {plant.stock}</p> */}
                    {/* <button onClick={()=>{props.addToCart(plant.key)}}>Add to cart</button> */}
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
