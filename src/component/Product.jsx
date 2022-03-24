import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
   

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            setProduct(await response.json());            
        }
        getProduct();
    }, []);

    
    const ShowProduct = () => {
        return (
            <>           
                        <div className="product-page">

                        <div id="grid_1" >
                            <div id="Tproductimg">
                                <div className="product-media-mini" ><img src={product.image} alt="images"/></div>
                                <div className="product-media-mini"><img src={product.image} alt="images"/></div>
                                <div className="product-media-mini"><img src={product.image} alt="images"/></div>
                            </div>
                            <div className="product-media" >
                                <img src={product.img} alt="images"/>
                            </div>
                        </div>

                        <div id="grid_2">
                            
                                <div className="product-head"> {product.title} </div>
                                <div className="product-price"> {product.price} </div>                                
                                <div className="product-category">{product.category}</div>
                                
                                
                                <div className="addcartgocartBTN">
                                    <button className="btn-add-item" onClick={() => addProduct(product)}>
                                        Add to Cart
                                    </button>
                                    <NavLink to="/cart" className="btn-add-item">
                                        Go to Cart
                                    </NavLink>
                                </div>

                            
                            </div>

                        </div>
                    
                
            </>
        )
    }

    return (
        <div>
            <div>
                <div>
                <ShowProduct />
                </div>
            </div>
        </div>
    );
}

export default Product;
