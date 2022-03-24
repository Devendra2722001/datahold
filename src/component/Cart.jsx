import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import Empty from './Empty.gif';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <section className="cart-wrapper-empty">
                <div className="Empty-Cart">
                    <img src={Empty} className="Empty-Cart-img" alt ="Error-Img"/>

                    <div className="Empty-Text">                    
                        <h2>Hey Your Cart is Empty</h2>
                        <NavLink to="/"><h6>Contine Shoping</h6></NavLink>
                    </div>
                    
                </div>
            </section>
        )
    }


    const cartItems = (product) => {
        return(
            <>
                <div className="cart-card-container" key={product.id}>
                    <div>
                        <div className="cart-card">
                                <img src={product.image} alt="images" className="cart-card-media" />
                                <div className="cart-card-text">                                        
                                    <div className="cart-card-head"> {product.title} </div> 
                                    <div className="cart-card-price"> {product.price} </div>
                                    <div class="cart-lastrow">
                                        <div className="cart-card-category"> {product.category}</div>                                                                
                                    </div>
                                    <div>
                                    <p className="lead">
                                        {product.qty} X {product.price} = {product.qty * product.price}
                                    </p>
                                    </div>
                                    <div className="plus-minus">
                                        <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                        <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                            <i className="fa fa-minus"></i>
                                        </button>                                        
                                    </div>                                                     
                                </div>
                                                    
                        </div>
                    </div>
                </div>
                
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="fullsizedisplay">
            {state.length === 0 && emptyCart()}
            <section className="cart-wrapper">
                {state.length !== 0 && state.map(cartItems)}
            </section>
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;
