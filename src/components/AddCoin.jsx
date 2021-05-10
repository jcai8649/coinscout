import React, { useContext, useState } from "react";
import debounce from "lodash/debounce";
import AsyncSelect from "react-select/async";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const [selectedCoin] = useState(null);
  const { addCoin, watchList } = useContext(WatchListContext);

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
    if (watchList.indexOf(selectedCoin.value) === -1) {
      addCoin(selectedCoin.value);
    }
  };

  const loadOptions = debounce((inputText, cb) => {
    fetch(`https://api.coingecko.com/api/v3/coins/list`)
      .then((result) => result.json())
      .then((coinList) =>
        cb(
          coinList
            .filter(
              ({ name, id }) =>
                name.includes(inputText) || id.includes(inputText)
            )
            .map(({ name, id }) => ({ label: name, value: id }))
        )
      );
  }, 1000);

  return (
    <AsyncSelect
      value={selectedCoin}
      cacheOptions
      onChange={handleOnChange}
      defaultOptions={availableCoins}
      placeholder={"Search"}
      loadOptions={loadOptions}
    />
  );
};

export default AddCoin;
