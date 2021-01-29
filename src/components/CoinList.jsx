import React, { useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import axios from "axios";

const CoinList = () => {
  const [coins, setCoin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum",
        },
      });

      setCoin(response.data);
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default CoinList;
