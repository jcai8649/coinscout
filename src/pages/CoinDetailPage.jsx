import React from "react";
import { useParams } from "react-router";

const CoinDetailPage = () => {
  const x = useParams();
  console.log(x);
  return <div></div>;
};

export default CoinDetailPage;
