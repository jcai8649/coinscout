import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ id, coin, deleteCoin }) => {
  return (
    <Link to="/coindetail" className="text-decoration-none my-1 coin">
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
            <i className="fas fa-long-arrow-alt-up mr-1"></i>
          ) : (
            <i className="fas fa-long-arrow-alt-down mr-1"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger mb-5"
        ></i>
      </li>
    </Link>
  );
};

export default Coin;
