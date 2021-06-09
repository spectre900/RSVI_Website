import React, { Component } from 'react';

import icon from './Images/Icons/picture.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Button} from 'react-bootstrap';
import styles from './Capsule.module.css';

class Capsule extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row>
                    <Col xl={6} className={styles.holder}>
                        <img src={icon} className={styles.image}/>
                    </Col>
                    <Col xl={6} className={styles.content}>
                        <p className={styles.heading}>
                            RVSI INFO-CAPSULE
                        </p>
                        <p className={styles.description}>
                            A small description about the Success Stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim. Nam eget molestie tortor. Ut at placerat ex. Suspendisse potenti. 
                        </p>
                        <Button className={styles.button}>
                            Sign up for the podcast now!
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Capsule;
