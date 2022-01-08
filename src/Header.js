import React from 'react' 
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
          <Link to="/"><div className="heading"><i>Shop Kart</i></div></Link>
          <div className="sign">
            
            <Link to="/cart"><img src="/images/cart.png" /><div className="heading">Cart</div></Link>
          </div>
        </header>
    )
}

export default Header
