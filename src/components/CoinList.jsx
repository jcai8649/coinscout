import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "../components/Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return (
        <div class="text-center">
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <ul className="coinlist list-group mt-2 gap-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
