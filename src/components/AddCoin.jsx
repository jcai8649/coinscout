import React, { useContext, useState } from "react";
import debounce from "lodash/debounce";
import AsyncSelect from "react-select/async";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { addCoin } = useContext(WatchListContext);

  const availableCoins = [
    { value: "bitcoin", label: "Bitcoin" },
    { value: "ethereum", label: "Ethereum" },
    { value: "cardano", label: "Cardano" },
    { value: "dogecoin", label: "Dogecoin" },
    { value: "ripple", label: "Ripple" },
    { value: "tether", label: "Tether" },
    { value: "bitcoin-cash", label: "Bitcoin Cash" },
    { value: "litecoin", label: "Litecoin" },
    { value: "eos", label: "EOS" },
    { value: "okb", label: "OKB" },
    { value: "tezos", label: "Tezos" },
  ];

  const handleOnChange = (selectedCoin) => {
    addCoin(selectedCoin.value);
  };

  const loadOptions = async (inputText, cb) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    const json = await response.json();
    debounce(
      cb(
        json
          .filter(
            ({ name, id }) => name.includes(inputText) || id.includes(inputText)
          )
          .map(({ name, id }) => ({ label: name, value: id }))
      ),
      300
    );
  };

  return (
    <AsyncSelect
      value={selectedCoin}
      cacheOptions
      onChange={handleOnChange}
      defaultOptions={availableCoins}
      placeholder={"Search Crypto..."}
      loadOptions={loadOptions}
    />
  );
};

export default AddCoin;
