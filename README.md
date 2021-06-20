## CoinScout

A cryptocurrency tracker powered by the [CoinGecko API](https://www.coingecko.com/api/documentations/v3) allows users to search, save, and view their favorite digital currencies in detailed graphical chart format.

VIEW LIVE: https://coinscout.herokuapp.com/

![preview](https://i.imgur.com/mBGAiic.gif)

- Searches through the entire CoinGecko API cryptocurrency database
- Implement debounce from [lodash](https://lodash.com/docs/4.17.15#debounce) to throttle unnecessary fetch calls to the API
- Utilizes React Context API to reduce prop drilling in components
- Store searched cryptocurrencies in local storage for data persistence
- Display cryptocurrencies' details in an animated chart with multiple timeline options

Future directions:

- Add sorting options to sort cryptocurrencies based on biggest gains/losses
- Convert cryptocurrency to other countries' monetary values
- Store data in a server database such as MongoDB

License
This project is licensed under the MIT License
