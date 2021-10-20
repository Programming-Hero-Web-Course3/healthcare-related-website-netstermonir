import React from 'react';
import { Row } from 'react-bootstrap';
import UseDoctors from '../../Hooks/UseDoctors';
import Doctor from '../Doctor/Doctor';
import Newslater from '../Home/Newslater/Newslater';
import bgdoctor from '../../image/banner/allwebsite.png';

const Doctors = () => {
    const [doctors] = UseDoctors();
    return (
        <>
            <section className="mb-5" style={{ background: `url(${bgdoctor})` }}>
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h2 className="text-center fw-bolder text-white">Our Popular Doctor</h2>
                    <hr className="high mx-auto"></hr>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            doctors.map(doctor => (<Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>))
                        }
                    </Row>
                </div>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default Doctors;