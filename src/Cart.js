import { useState } from 'react';

const Cart = (props) => {

    const { cart, setCart, cartTotal, setCartTotal } = props

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

        <section className="cart">

            <div className="cartContainer">
                <p>Items in Cart: {cartTotal}</p>
            </div>

            <div>

            <button className = "cartButton" onClick = {handleClick}>
                {
                    isDisplayed
                        ? "Hide Cart"
                        : "Show Cart"
                }
            </button>

            <button className = "cartButton" onClick={clearCart}>Clear Cart</button>
            </div>


            <ol className="cartList">

                {
                    isDisplayed
                        ? cart.map((plant, index) => {

                            return (

                            <li key={`${plant.key}-${index}`} className="cartItem">
                                <img className="cartImage" src={plant.photo} alt= {`a {plant.name}`}/> 
                                <h3 className="cartItemInfo">{plant.name} - CAD ${plant.price}.00</h3>
                            </li>

                            )
                        })
                        : null
                }
             </ol>    
        </section>
    )

}

export default Cart;