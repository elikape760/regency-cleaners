import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'


function Cart({ cartItems, onAdd, onRemove }) {

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.08875;
    const shippingPrice = itemsPrice > 50 ? 0 : 10
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const history = useHistory()


    function handleClick() {
        alert("Order sucessful")
        history.push('/home')
    }

    return (
        <div className="container">
            <div className=" row">
                <div className=" col-sm offset-2 col-xl-8 offset-2">
                    <div className="card-body">
                        <h1 className='text-center pt-2'>My Cart</h1>
                        <div className="col-6 offset-3 pt-3">
                            <div>
                                {cartItems.length === 0 && <h2>Cart Is Empty</h2>}
                            </div>
                            {cartItems.map((product) => (
                                <div key={product.id}>
                                    <div className="cart-grid border-dark">
                                        <img src={product.image} className="cart-image" alt={product.name} />
                                        <div class="card-body d-inline">
                                            <h5 class="card-title">{product.name}:
                                            {product.qty} x ${(product.qty * product.price).toFixed(2)} </h5>
                                        </div>
                                        <div className='d-inline'>
                                            {/* {product.qty} x ${(product.qty * product.price).toFixed(2)} */}
                                        </div>
                                        <div class="card-body">
                                            <button className='btn btn-primary' onClick={() => onAdd(product)} basic color='blue'>
                                                +
                                            </button>
                                            <button className='btn btn-danger' onClick={() => onRemove(product)} basic color='red'>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                </div>
                            ))}
                            {cartItems.length !== 0 && (
                                <>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-3'>Items Price</div>
                                        <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Tax Price</div>
                                        <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>DeliveryCharge</div>
                                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                                    </div> <hr />
                                    <div className='row'>
                                        <div className='col-3'><strong>Total Price</strong></div>
                                        <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
                                    </div>
                                    <hr></hr>
                                    <div className='row'>
                                        <button className='btn btn-info' onClick={handleClick} >Checkout</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cart