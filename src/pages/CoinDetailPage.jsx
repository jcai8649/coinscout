import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import coinGecko from "../apis/coinGecko";
import CoinData from "../components/CoinData";
import HistoryChart from "../components/HistoryChart";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: day.data.prices,
        week: week.data.prices,
        year: year.data.prices,
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
