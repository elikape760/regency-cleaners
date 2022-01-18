import React from 'react'
import { Button} from 'semantic-ui-react'


function Cart({ cartItems, onAdd, onRemove }) {

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.08875;
    const shippingPrice = itemsPrice > 50 ? 0 : 10
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className='block col-1'>
            <h2>My Cart</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {cartItems.map((product) => (
                <div key={product.id} className="row">
                    <div className='col-2'>
                        <h3>{product.name}</h3> 
                        <img className='cart-image' src={product.image} alt='{product.name}' />
                        {/* <p>${product.price}0</p> */}
                    </div>
                    <div className='col-2'>
                        <Button className='add' onClick={() => onAdd(product)} basic color='blue'>
                            +
                        </Button>
                        <Button className='add' onClick={() => onRemove(product)} basic color='red'>
                            -
                        </Button>
                    </div>
                    <div className='col-2 text-right'>
                        {/* ${product.qty} x ${product.price.toFixed(2)} */}
                        {product.qty} x ${(product.qty * product.price).toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !==0 && (
                <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Items Price</div>
                    <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Tax Price</div>
                    <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Delivery Charge</div>
                    <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong>Total Price</strong></div>
                    <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr></hr>
                <div className='row'>
                    <button onClick={() => alert('Implement Checout')}>Checkout</button>
                </div>
                </>
            )}
        </aside>
    )
}
export default Cart