import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import coinGecko from "../apis/coinGecko";
import HistoryChart from "../components/HistoryChart";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: el[0],
        y: el[1] > 1 ? el[1].toFixed(2) : el[1],
      };
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      const [day, week, month, threeMonth, year, max, detail] =
        await Promise.all([
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
              days: "30",
            },
          }),
          coinGecko.get(`/coins/${id}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: "90",
            },
          }),
          coinGecko.get(`/coins/${id}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: "365",
            },
          }),
          coinGecko.get(`/coins/${id}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: "max",
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
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        month: formatData(month.data.prices),
        threeMonth: formatData(threeMonth.data.prices),
        year: formatData(year.data.prices),
        max: formatData(max.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchdata();
  }, [id]);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-warning" role="status"></div>
        </div>
      );
    }
    return (
      <div className="coinlist">
        <HistoryChart data={coinData} />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
