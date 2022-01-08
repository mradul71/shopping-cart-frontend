import React from 'react'
import Header from './Header';
import Fade from "react-reveal/Fade";

function CartScreen(props) {

    const saveditems = JSON.parse(localStorage.getItem('items'));

    return (

      <div className="grid-container">
        <Header />
        <main>
        {
        saveditems
        ?
        <div>
          <div className="cart">
            <Fade bottom cascade>
              <ul className="cart-items">
                {saveditems.map((item) => (
                  <li key={item._id} className="prod">
                    <div>
                      <img src={item.image} alt={item.name}></img>
                    </div>
                    <div>
                      <div className="infoo">
                        <div><span className="name">{item.name}</span></div>
                        <div><span className="category">{item.category}</span></div>
                        <div><span className="rating">{item.rating} stars</span></div>
                      </div>
                      <div className="right">
                        {item.price}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total: &nbsp; amount
                  </div>
                  <button className="button primary">Proceed</button>
                </div>
              </div>
            </div>
            </div>
            :
        <div className="no-items">No Items Yet</div>
      }
        </main>
      </div>
        
    )
}

export default CartScreen;
