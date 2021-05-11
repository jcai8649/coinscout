import React, { useEffect, useRef, useState, useCallback } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../ChartConfigs/chartConfigs";
import { Link } from "react-router-dom";
import CoinData from "../components/CoinData";
import { max } from "moment";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, month, threeMonth, year, max, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = useCallback(() => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "30d":
        return month;
      case "90d":
        return threeMonth;
      case "1y":
        return year;
      case "max":
        return max;
      default:
        return day;
    }
  }, [day, week, month, threeMonth, year, max, timeFormat]);

  useEffect(() => {
    //Remove other charts, leaving only the latest one
    for (let chart in Chartjs.instances) {
      if (
        Object.keys(Chartjs.instances).length >= 1 &&
        Chartjs.instances[chart]
      ) {
        Chartjs.instances[chart].destroy();
      }
    }

    //Make
    if (chartRef && chartRef.current && detail) {
      new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} Price USD`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.9)",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  }, [detail, determineTimeFormat]);

  const renderPriceAndImage = () => {
    if (detail) {
      return (
        <>
          <h4 className="text-center">{data.detail.name}</h4>
          <img
            className="coinlist-image mx-auto d-block"
            src={data.detail.image}
            alt={data.detail.name + " logo"}
          />
          <p className="my-0 text-center">
            $
            {detail.current_price > 1
              ? detail.current_price.toFixed(2)
              : detail.current_price}
          </p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0 text-center"
                : "text-success my-0 text-center"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg-white border mt-2 rounded p-3">
      <Link to="/">
        <i className="far fa-arrow-alt-circle-left fa-2x"></i>
      </Link>
      <div>{renderPriceAndImage()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className="chart-button mt-1 ">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          week
        </button>
        <button
          onClick={() => setTimeFormat("30d")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          month
        </button>
        <button
          onClick={() => setTimeFormat("90d")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          3 months
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          year
        </button>
        <button
          onClick={() => setTimeFormat("max")}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          max
        </button>
      </div>
      <CoinData data={data.detail} />
    </div>
  );
};

export default HistoryChart;
