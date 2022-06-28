import { useState } from 'react';

const Cart = (props) => {

    const { cart, setCart, cartTotal, setCartTotal } = props

    const [ isDisplayed, setIsDisplayed ] = useState(false)

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
                   isDisplayed && cart.length == 0
                    ? <p> Your cart is empty, add a new plant friend!</p>
                    : null 
                }
                {
                    isDisplayed && cart.length > 0

                    ? cart.map((plant, index) => {
                        return (

                        <li key={`${plant.key}-${index}`} className="cartItem">
                            <img className="cartImage" src={plant.photo} alt= {`a {plant.name}`}/> 
                            <h3 className="cartItemInfo">{plant.name} - CAD ${plant.price}.00</h3>
                        </li>

                            )
                        })
                        
                    :null
                }                
             </ol>    
        </section>
    )
}

export default Cart;