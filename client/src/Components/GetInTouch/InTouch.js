import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './InTouch.module.css';

import image from './image.jpg';

import youtube from './youtube.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

class InTouch extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <Col lg={11}>
                        <img src={image} className={styles.image}/>
                    </Col>
                    <Col lg={1} className={styles.icons}>
                        <img src={youtube} className={styles.icon} />
                        <img src={instagram} className={styles.icon} />
                        <img src={facebook} className={styles.icon} />
                        <img src={twitter} className={styles.icon} />
                    </Col>
                </Row>
                <Row className={styles.textholder}>
                    <p className={styles.text}>
                        Get In Touch
                    </p>
                </Row>
            </Container>
        );
    }
}

export default InTouch;
