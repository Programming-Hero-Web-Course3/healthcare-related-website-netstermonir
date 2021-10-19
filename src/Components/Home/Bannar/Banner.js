import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="banner-text text-center">
                            <h1 className="pb-3 fw-bolder">DENTISTRY WITH HEART</h1>
                            <p className="pb-3">Creating the healthy smile you want through science and artistry.Because everyone deserves to smile.</p>
                            <Link to="/appointment">
                                <Button className="fs-6 fw-bolder text-white" variant="info">Make an Appointment</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;