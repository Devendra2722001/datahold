import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
            <nav class="navbar" id="Navbar">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/"><img src="../images/logo1.png" width="180px;" alt="Logo"></img></NavLink>                    
                    <div id="searchbar">
                        
                        <form class="d-flex">                            
                            <input class="form-control" type="search" placeholder="Search Here..." aria-label="Search" />                            
                        </form>
                    </div>
                    <div class="Nav-menu-options">
                        <div id="bloc3" class="push"><NavLink to="/Cart"><img src="../images/cart.png" width="30rem;" alt="favorits"></img></NavLink></div>
                        <div id="bloc4" class="push"><NavLink to="/"><img src="../images/heart.png" width="30rem;" alt="favorits"></img></NavLink></div>                        
                        <div id="bloc5" class="push"><NavLink to="/User"><img src="../images/user.png" width="30rem;" alt="profile"></img></NavLink></div>
                    </div>
                </div>
            </nav>
        </div>    
  );
};

export default Navbar;
