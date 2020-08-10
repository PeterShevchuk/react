import React from "react";
import "./Card.css";

const Card = ({ obj }) => {
  return (
    <div className="card-item">
      {obj.isFreeShipping ? <div className="card-stopper">Free shipping</div> : null}
      <div className="card-item__thumb">
        <img src={obj.img} alt={obj.title} />
      </div>
      <p className="card-item__title">{obj.title}</p>
      <div className="card-item__price">
        <div className="val">
          {obj.currencyFormat} {obj.price}
        </div>
      </div>
      <div className="card-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default Card;
