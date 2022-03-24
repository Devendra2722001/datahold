import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);


  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (

      <>

        <div className="catnavbar" id="Catnav">
          <div className="btn-group">
            <button className="btn-group__item" onClick={() => setFilter(data)}>All</button>
            <button className="btn-group__item" onClick={() => filterProduct("Mobile")}>Mobile</button>
            <button className="btn-group__item" onClick={() => filterProduct("Laptop")}>Laptop</button>
            <button className="btn-group__item" onClick={() => filterProduct("Shoes")}>Shoes</button>
          </div>
        </div>

        <section className="wrapper">

          {filter.map((product) => {
            return (
              <>

                <div className="card-container" key={product.id}>
                  <NavLink to={`/products/${product.id}`} id="copyright">
                    <div className="card">
                      <img src={product.image} alt="images" className="card-media" />
                      <div className="card-text">
                        <div className="card-head"> {product.title} </div>
                        <div className="card-price"> {product.price} </div>
                        <div class="lastrow">
                          <div className="card-category"> {product.category}</div>
                          <div className="card-add"><button type="submit" class="hearticon"><i class="fa fa-heart fa-lg"></i></button></div>
                        </div>
                      </div>

                    </div>
                  </NavLink>
                </div>

              </>
            );
          })}
        </section>
      </>
    );
  };
  return (
    <div>
      <div>
        <div>
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Products;
