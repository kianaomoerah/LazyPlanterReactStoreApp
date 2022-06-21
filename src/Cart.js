import { useState } from 'react';
import Inventory from './Inventory';

const Cart = (props) => {

    const { cart, setCart, setCartTotal } = props

    const [ isDisplayed, setIsDisplayed ] = useState(false)

    // have the cart state in App.js and pass this state to inventory so it can push to this state and make it accessible by Cart so it can show the array

    // create a function that will clear cart and then put the cart total to 0 
        // import cart state as well 

    
    // a function that will update the state of the cart component from displayed to not displayed 

    const clearCart = () => {

        setCart([])

        setCartTotal(0)

    }
    
    const handleClick = () => {

        setIsDisplayed(!isDisplayed)
    }

    return (

        <section>
            <button onClick = {handleClick}>
                {
                    isDisplayed
                        ? "Hide Cart"
                        : "Show Cart"
                }
            </button>

            <button onClick={clearCart}>Clear Cart</button>
            <ul>

                {
                    isDisplayed
                        ? cart.map((plant) => {

                            return (

                            <>
                                <li key={plant.key} className="cartItem">
                                    <h2>{plant.name}</h2>
                                    <img src={plant.photo} alt= {`a {plant.name}`}/>
                                </li>
                            </>

                            )
                        })
                        : null
                }
             </ul>    
        </section>
    )

}

export default Cart;



// const Cart = (props) => {

//     const {cart, setCart} = props

//     return (
//         <>
//             {/* <div>{props.cartTotal}</div> */}
//             <p>oooo nice cart</p>
//             <p>{cart.length}</p>
//             <button>Go to Cart</button>
//         </>

//     )
// }

// export default Cart;