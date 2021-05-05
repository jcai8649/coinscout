import React from "react";
import { numberWithCommas } from "../utils";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{numberWithCommas(data.market_cap)}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span>{numberWithCommas(data.total_supply)}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <span>{numberWithCommas(data.total_volume)}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">High 24h</span>
              <span>${numberWithCommas(data.high_24h)}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <span>{numberWithCommas(data.circulating_supply)}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Low 24h</span>
              <span>${numberWithCommas(data.low_24h)}</span>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{renderData()}</div>;
};

export default CoinData;
