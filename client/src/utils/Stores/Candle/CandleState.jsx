import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./CandleAPI";
import actions from "./CandleActions.json";
const { CANDLES_LOADING,
  SET_CANDLES,
  ADD_CANDLE,
  CANDLES_ERROR,
  CLEAR_CANDLES_ERROR } = actions;

const CandleContext = createContext();
const { Provider } = CandleContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CANDLES_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_CANDLES:
      return {
        ...state,
        candles: action.candles,
        loading: false,
        pageLoading: false
      };

    case ADD_CANDLE:
      return {
        ...state,
        candles: [action.candle, ...state.candles],
        loading: false
      };

    case CANDLES_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };

    case CLEAR_CANDLES_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

const CandleProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    candles: [],
    pageLoading: true,
    loading: false,
    error: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCandleContext = () => {
  return useContext(CandleContext);
};

const refreshCandles = () => {
  const [{ loading }, candlesDispatch] = useCandleContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    candlesDispatch({ type: CANDLES_LOADING });
    API.getCandles().then(candles => {
      candlesDispatch({ type: SET_CANDLES, candles });
    });
  }, []);
};

export { CandleProvider as Provider, useCandleContext as useContext, refreshCandles as refreshOnLoad };
