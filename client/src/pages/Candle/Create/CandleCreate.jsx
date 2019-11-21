import React, { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Candle from '../../../utils/Stores/Candle';
import User from "../../../utils/Stores/User";
import { CandleError } from '../../../components';
import { useHistory } from 'react-router-dom';

const { CANDLES_LOADING, ADD_CANDLE, CANDLES_ERROR } = Candle.actions;

export default function () {
    User.refreshOnLoad();
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, candleDispatch] = Candle.useContext();
    const nameInput = useRef();
    const scentInput = useRef();
    const heightInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const name = nameInput.current.value;
        const scent = scentInput.current.value;
        const height = heightInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        createCandle(name, scent, height);
    };

    // createCandle does a post to our "api/login" route and if successful, redirects us the the members page
    function createCandle(name, scent, height) {
        setValidated(false);
        candleDispatch({ type: CANDLES_LOADING });
        Candle.API.createCandle({
            name,
            scent,
            height
        }).then(candle => {
            candleDispatch({ type: ADD_CANDLE, candle });
            history.push("/candle");
        }).catch((err) => {
            candleDispatch({ type: CANDLES_ERROR, message: err });
        });
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Create Candle</h2>
                    <Form
                        validated={validated}
                        onSubmit={handleSubmit}
                        noValidate>
                        <Form.Group controlId="formCandleName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="text"
                                placeholder="Enter Candle Name"
                                ref={nameInput} />
                            <Form.Control.Feedback type="invalid">
                                Name is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCandleScent">
                            <Form.Label>Scent</Form.Label>
                            <Form.Control
                                required
                                pattern=".*\S+.*"
                                type="text"
                                placeholder="Enter Candle Scent"
                                ref={scentInput} />
                            <Form.Control.Feedback type="invalid">
                                Scent is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCandleHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter Candle Height"
                                ref={heightInput} />
                            <Form.Control.Feedback type="invalid">
                                Height is required and must be a number.
                            </Form.Control.Feedback>
                        </Form.Group>
                            <CandleError />
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
