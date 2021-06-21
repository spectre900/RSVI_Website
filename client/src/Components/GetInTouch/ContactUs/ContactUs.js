import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './ContactUs.module.css';

class ContactUs extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.holder}>
                    <Col lg={7} className={styles.form}>
                        <p className={styles.heading}>
                            Contact Us
                        </p>
                        <input className={styles.input} placeholder='Name'/>
                        <input className={styles.input} placeholder='Email'/>
                        <textarea className={styles.textbox} placeholder='Message'/>
                        <button type='submit' className={styles.submit}>
                            Submit
                        </button>
                    </Col>
                    <Col lg={5} className={styles.details}>
                        <p className={styles.content}>
                            Email us with any suggestion or queries.
                            We would be happy to answer all your questions
                            and set up a meeting with you.
                        </p>
                        <p className={styles.email}>
                            Email us at: hr@rsvi.org
                        </p>
                        <iframe 
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d889.9311080799333!2d80.95065634034962!3d26.84871574485951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6618eecac0f2ad60!2sRehabilitation%20Society%20of%20the%20Visually%20Impaired!5e0!3m2!1sen!2sin!4v1623867318407!5m2!1sen!2sin' 
                            className={styles.map}
                            loading='lazy' 
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactUs;
