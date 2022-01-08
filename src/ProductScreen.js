import React, { useEffect, useState } from 'react'
import axios from "axios";
//import "./ProductScreen.css"
import Header from './Header';
import { Link } from 'react-router-dom';

function ProductScreen(props)  {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productId = props.match.params.id;

        const fetchData = async () => {
            const {data} = await axios.get("https://shop-backend-cart.herokuapp.com/products/"+productId);
            setProduct(data);
        }
        fetchData();
        return () => {
        }
    }, []);
    const saveditems = JSON.parse(localStorage.getItem('items'));
    const [items, setItems] = useState(saveditems || []);
    const addItem = () => {
        setItems([...items, product]);
        document.querySelector(".message").style.display = "block";
      };

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
          setItems(items);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);

      console.log(items);

    return (
        <div className="grid-container">
            <Header />
            <main>
                <div className="detail">
                    <div className="details-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li><h2>{product.name}</h2></li>
                            <li>{product.rating} Stars</li>
                            <li>$ {product.price}</li>
                            <li>Description :</li>
                            <button className="button primary" onClick={addItem}>ADD TO CART</button><p className="message">Added to cart</p>
                            <br></br>
                            <Link to="/cart"><button className="view">View Cart</button></Link>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductScreen;