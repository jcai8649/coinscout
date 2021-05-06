import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";

const CoinSummaryPage = () => {
  return (
    <div className={"coinsummary shadow border rounded-2 p-5 mt-2 bg-white"}>
      <AddCoin />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
