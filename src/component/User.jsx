import Empty from './Empty.gif'
import React from 'react';
import { NavLink } from 'react-router-dom';


const User = () => {
    return(
        <section className="cart-wrapper-empty">
            <div className="Empty-Cart">
                <img src={Empty} className="Empty-Cart-img" alt ="Error-Img"/>

                <div className="Empty-Text">                    
                    <h2>Sorry User Page Is Pending</h2>
                    <NavLink to="/"><h6>Contine Shoping</h6></NavLink>
                </div>
                
            </div>
        </section>
    )
}

export default User