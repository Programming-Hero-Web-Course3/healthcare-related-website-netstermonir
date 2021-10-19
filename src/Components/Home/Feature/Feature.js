import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Feature.css';
import feature1 from '../../../image/feature/certification.png';
import feature2 from '../../../image/feature/time.png';
import feature3 from '../../../image/feature/personal.png';
import feature4 from '../../../image/feature/like.png';

const Feature = () => {
    return (
        <section className="feature mb-5">
            <div className="container">
                <div className="row">
                    <CardGroup>
                        <Card className="feaature-card">
                            <Card.Img width="50px" className="mx-auto p-1" src={feature1} />
                            <Card.Body>
                                <Card.Title>Certification</Card.Title>
                                <Card.Text>
                                    We provide an exceptional blend of quality nursing and wellness services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature2} />
                            <Card.Body>
                                <Card.Title>24/7 Opened</Card.Title>
                                <Card.Text>
                                    It is a range of healthcare services that can be given in your home.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature3} />
                            <Card.Body>
                                <Card.Title>Professional Staff</Card.Title>
                                <Card.Text>
                                    Medical examinations, on condition of its periodic passing, allows a person.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature4} />
                            <Card.Body>
                                <Card.Title>Fair Prices</Card.Title>
                                <Card.Text>
                                    It is a range of healthcare services that can be given in your home.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default Feature;