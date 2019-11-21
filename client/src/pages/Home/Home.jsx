import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Stores/User';
import Candle from '../../utils/Stores/Candle';

export default function () {
    User.refreshOnLoad();
    // we eagerly load candles here so when the user switches pages it will appear faster. 
    Candle.refreshOnLoad();
    const [{user}] = User.useContext();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>
                        Welcome{" "}
                        <span className="member-name">
                            {user.email}
                        </span>
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}
