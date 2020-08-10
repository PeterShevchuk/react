import React from 'react';
import './CardsColection.css'

import products from '../../db/product.json';
import Card from '../Card/Card';

// console.log(products)


const CardsColection = () => {
    return (
        <div className="card-container">
      <div className="card-container__header">
        <small className="products-found">
          <span>16 Product(s) found</span>
        </small>
        <div className="sort">
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>
        {products.map(item => <Card  key={item.id} obj={item}/>)}
    </div>
    );
};

export default CardsColection;