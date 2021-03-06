import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils";

const Coin = ({ id, coin, deleteCoin }) => {
  return (
    <Link
      to={`/coins/${coin.id}`}
      className="text-decoration-none my-1 coin shadow rounded"
    >
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-column text-dark border-white">
        <h6>{coin.name}</h6>
        <img
          className="coinlist-image"
          src={coin.image}
          alt={coin.name + "logo"}
        />
        <span>${numberWithCommas(coin.current_price)}</span>
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
          {coin.price_change_percentage_24h.toFixed(2)}%
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
