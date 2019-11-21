import React from "react";
import Card from 'react-bootstrap/Card';

export default function MyLink({ name, scent, height }) {
    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle class="mb-2 text-muted">{scent}</Card.Subtitle>
                <Card.Text>The candle currently has a height of {height} cm</Card.Text>
            </Card.Body>
        </Card>
    );
}