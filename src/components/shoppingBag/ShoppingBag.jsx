import React from 'react'
import { useNavigate } from 'react-router-dom';
import './shoppingBag.css'

export default function ShoppingBag() {
    const navigate = useNavigate();
    return (
      <div className="ShoppingBagWrapper">
        <button className='stepBack' onClick={() => navigate(-1)}>Close</button>
        <div className="modalShoppingBag">
          <h3>Modal</h3>
          {/* <button onClick={() => navigate(-1)}>Close</button> */}
        </div>
      </div>
    );
}
