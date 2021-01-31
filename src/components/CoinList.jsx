import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import axios from "axios";
import { WatchListContext } from "../context/watchListContext";

const CoinList = () => {
  const [coins, setCoin] = useState([]);
  const { watchList } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });

      console.log(response.data);
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default CoinList;
