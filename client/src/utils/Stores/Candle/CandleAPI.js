import axios from "axios";

export default {
  // Gets all candles
  getCandles: function() {
    return axios.get("/api/candles").then(({data}) => data);
  },
  // Creates a candle in the database
  createCandle: function(candleData) {
    return axios.post("/api/candles", candleData).then(({data}) => data);
  }
};