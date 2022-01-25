import React from 'react'
// import { Button } from 'semantic-ui-react'


function Cart({ cartItems, onAdd, onRemove }) {

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.08875;
    const shippingPrice = itemsPrice > 50 ? 0 : 10
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (

        <div className=" row mb-3 justify-content-left">
            <h1 className='text-center pt-2'>My Cart</h1>
            <div className="col-6 offset-3 pt-3">
                <div>
                    {cartItems.length === 0 && <div>Cart Is Empty</div>}
                </div>
                {cartItems.map((product) => (
                    <div key={product.id}>
                        <div class="card mb-3 ">
                            <img src={product.image} class="card-img-top-rounded mx-auto d-block" alt={product.name} />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}:</h5>
                                <p class="card-text">{product.description}description should go here:</p>
                            </div>
                            <div class="card-body">
                                <button className='btn btn-primary' onClick={() => onAdd(product)} basic color='blue'>
                                    +
                                </button>
                                <button className='btn btn-danger' onClick={() => onRemove(product)} basic color='red'>
                                    -
                                </button>
                            </div>
                            <div className='d-inline'>
                                {product.qty} x ${(product.qty * product.price).toFixed(2)}
                            </div>
                        </div>
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
                            <button className='btn btn-info' onClick={() => alert('Implement Checkout')}>Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>

        // <aside className='block col-1'>
        //     <h2>My Cart</h2>
        //     <div>
        //         {cartItems.length === 0 && <div>Cart Is Empty</div>}
        //     </div>
        //     {cartItems.map((product) => (
        //         <div key={product.id} className="row">
        //             <div className='col-2'>
        //                 <h3>{product.name}</h3> 
        //                 <img className='cart-image' src={product.image} alt='{product.name}' />

        //             </div>
        //             <div className='col-2'>
        //                 <Button className='add' onClick={() => onAdd(product)} basic color='blue'>
        //                     +
        //                 </Button>
        //                 <Button className='add' onClick={() => onRemove(product)} basic color='red'>
        //                     -
        //                 </Button>
        //             </div>
        //             <div className='col-2 text-right'>

        //                 {product.qty} x ${(product.qty * product.price).toFixed(2)}
        //             </div>
        //         </div>
        //     ))}
        //     {cartItems.length !==0 && (
        //         <>
        //         <hr></hr>
        //         <div className='row'>
        //             <div className='col-2'>Items Price</div>
        //              <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
        //         <div className='row'>
        //             <div className='col-2'>Tax Price</div>
        //             <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
        //         </div>
        //         <div className='row'>
        //             <div className='col-2'>Delivery Charge</div>
        //             <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
        //         </div>
        //         <div className='row'>
        //             <div className='col-2'><strong>Total Price</strong></div>
        //             <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
        //         </div>
        //         <hr></hr>
        //         <div className='row'>
        //             <button onClick={() => alert('Implement Checkout')}>Checkout</button>
        //         </div>
        //         </>
        //     )}
        // </aside>
    )
}
export default Cart