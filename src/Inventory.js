const Inventory = (props) => {

    const plants = (props.plants) 

    console.log(plants)


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