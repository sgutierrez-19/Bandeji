import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { UserForm } from '../../components';
import User from '../../utils/Stores/User';

function EmailMessage() {
    return (
        <Fragment>
            You must enter a valid email.
        </Fragment>
    );
}

function PasswordMessage() {
    return (
        <Fragment>
            You must enter a valid password.
        </Fragment>
    );
}

export default function () {
    User.refreshOnLoad();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <UserForm
                        name="Log In"
                        className="login"
                        api={User.API.login}
                        EmailMessage={EmailMessage}
                        PasswordMessage={PasswordMessage}
                    />
                    <br />
                    <p>Or sign up <Link to="/signup">here</Link></p>
                </Col>
            </Row>
        </Container>
    );
}