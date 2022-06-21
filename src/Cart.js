import { useState } from 'react';
import Inventory from './Inventory';

const Cart = (props) => {

    const { cart } = props

    const [ isDisplayed, setIsDisplayed ] = useState(false)

    // have the cart state in App.js and pass this state to inventory so it can push to this state and make it accessible by Cart so it can show the array

    // create a function that will clear cart and then put the cart total to 0 
        // import cart state as well 

    
    // a function that will update the state of the cart component from displayed to not displayed 
    
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
                {
                    isDisplayed
                        ? cart.map((plant) => {

                            return <Inventory />
                        })
                        : <p>Click here to view your cart</p>
                }
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