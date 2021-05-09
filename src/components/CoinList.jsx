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
      setCoins(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-warning mt-1" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <ul className="coinlist list-group mt-2 gap-3 coinlist-grid">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default React.memo(CoinList);
