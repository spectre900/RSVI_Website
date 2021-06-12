import React, { Component } from 'react';

import Rehabilitation from './Rehabilitation';
import Mission from './Mission';
import Journey from './Journey';
import Success from './Success';

class Home extends Component {
    render() {
        return (
            <div>
                <Rehabilitation />
                <Mission />
                <Journey />
                <Success/>
            </div>
        );
    }
}

export default Home;
