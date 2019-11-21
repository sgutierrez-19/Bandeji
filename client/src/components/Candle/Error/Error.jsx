import React, { useEffect } from "react";
import Candle from '../../../utils/Stores/Candle';
import User from '../../../utils/Stores/User';
import Error from '../../Error';
import { useHistory } from "react-router-dom";

const { CLEAR_CANDLES_ERROR } = Candle.actions;
const { USER_ERROR } = User.actions;

export default function () {
    const [{ error }, candleDispatch] = Candle.useContext();
    const [/* user not needed */, userDispatch] = User.useContext();
    const history = useHistory();
    let message = null;
    if (error) {
        if (error.response
            && error.response.data
            && error.response.data.errors
            && error.response.data.errors[0]
            && error.response.data.errors[0].message) {
            message = error.response.data.errors[0].message;
        }
        else if (error.request && error.request.status === 403) {
            setTimeout(() => userDispatch({
                type: USER_ERROR,
                message: {
                    response: {
                        data: "You have been logged off, please sign in again."
                    }
                }
            }), 10)
            history.push("/login");
        } else {
            message = error.message || (error.response && error.response.data);
        }
    }
    let messageTimeout;
    useEffect(() => {
        if (!message) {
            return;
        }
        clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
            candleDispatch({ type: CLEAR_CANDLES_ERROR })
        }, 5500)
    }, [message])
    return (
        <Error message={message} />
    )
}