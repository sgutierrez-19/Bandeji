import actions from "./CandleActions.json";
import API from "./CandleAPI.js";
import { Provider, useContext, refreshOnLoad } from "./CandleState.jsx";

export default {
    actions,
    API,
    Provider, 
    useContext,
    refreshOnLoad
};

export {
    actions as candleActions,
    API as candleAPI,
    Provider as CandleProvider, 
    useContext as useCandleContext,
    refreshOnLoad as refreshCandlesOnLoad
}