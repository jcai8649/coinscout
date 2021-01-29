import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import coinGecko from "../apis/coinGecko";

const CoinSummaryPage = () => {
  return (
    <div>
      <AddCoin />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
