import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ id, coin }) => {
  return (
    <Link to="/coindetail" className="text-decoration-none">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark rounded">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span>{coin.current_price}</span>
        <span
          className={
            coin.price_change_percentage_24h >= 0
              ? "text-success mr-2"
              : "text-danger mr-2"
          }
        >
          {coin.price_change_percentage_24h >= 0 ? (
            <i className="fas fa-long-arrow-alt-up"></i>
          ) : (
            <i className="fas fa-long-arrow-alt-down"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i className="delete-icon far fa-times-circle text-danger"></i>
      </li>
    </Link>
  );
};

export default Coin;
