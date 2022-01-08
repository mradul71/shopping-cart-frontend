import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import Fade from "react-reveal/Fade";
import Header from './Header';

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data} = await axios.get("https://shop-backend-cart.herokuapp.com/products");
        setProducts(data);
        }
        fetchData();
        return () => {
        }
    }, [])

    return (
      <div className="grid-container">
      <Header />
        <main>
          <div className="content">
              <div className="main">
              <Fade left cascade>
                <ul className="products">
                  {
                    products.map(product => (
                      <li key={product._id} className="container">
                        <div className="product">
                            <Link to={"/product/" + product._id}>
                              <img src={product.image}></img>
                            </Link>
                            <div className="product-price">
                              <div>{product.name}</div>
                              <div>$ {product.price}</div>
                            </div>
                            <div className="info">
                              <div>{product.brand}</div>
                              <div>{product.rating}  stars</div>
                            </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
          </Fade>
              </div>
          </div>
        </main>
      </div>
    )
}

export default HomeScreen
