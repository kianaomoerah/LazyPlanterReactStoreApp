const Inventory = (props) => {

    const plants = (props.plants) 

    return (

        <div className="wrapper">

            <h2>Shop our collection!</h2>
                <ul>

                {
                    plants.map((plant) => {

                        const defaultImage = "https://images.unsplash.com/photo-1646667687331-e06974a7fda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"

                        return (

                        <li key={plant.key} className="productItem">
                            <img src={plant.photo ? plant.photo : defaultImage } alt= {`a ${plant.name}`}/>
                            <h3>{plant.name}</h3>
                            <p>CAD ${plant.price}.00</p>
                
                            <button className="productButton" onClick={() => {props.addToCart(plant)} }>Add to cart</button>
                        </li>
                   
                        )

                    })
                }
                </ul>
        </div>
    )
}


export default Inventory;
