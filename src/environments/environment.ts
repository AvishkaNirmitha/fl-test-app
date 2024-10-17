const url = "localhost";
const port = "5100";
const serverProtocol = "http";

export const environment = {
  production: false,
  site_name: "28xClub",
  api_url: `${serverProtocol}://${url}:${port}/api/`,
  rest_countries_api: `https://restcountries.com/v3.1/all`,
  rest_cities_api: `https://countriesnow.space/api/v0.1/`,
  asserts: `${serverProtocol}://${url}:${port}/assets/`,
  market_price_socket_url: {
    1: `wss://stream-testnet.bybit.com/realtime_public`, //bybit
    2: "wss://ws.bitget.com/mix/v1/stream", //bitget
    3: "wss://fstream.binance.com/ws/btcusdt@kline_1m", //binace
  },
  image_load_url: {
    fullImg: `${serverProtocol}://${url}:${port}/uploads/`,
    size100: `${serverProtocol}://${url}:${port}/uploads/100/`,
    size200: `${serverProtocol}://${url}:${port}/uploads/200/`,
    size300: `${serverProtocol}://${url}:${port}/uploads/300/`,
  },
  trade_acc_socketUrl: `${serverProtocol}://${url}:${port}`,
  trade_notify_url: `${serverProtocol}://${url}:${port}/api/`,
  fe_site_url: "http://localhost:4200/",
  transaction_url: "https://etherscan.io/tx/",
  widget_url:
    "https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d4e3e&interval=1&hidetoptoolbar=1&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT.P&symbol=BINANCE%3A",
  // widget_url: `https://www.tradingview.com/widgetembed/?frameElementId=tradingview_2b89d`,

  login_validation_config: {
    elite: {
      user_type: "elite",
      accepted_domains: [],
    },
    pro: {
      user_type: "pro",
      accepted_domains: [],
    },
  },
  network_chain_id: "11155111", // sepolia
  network_name: "Sepolia", // sepolia
  service_fee_percentage: 5, // 5 = 5%
};
