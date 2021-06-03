import React, { Component } from 'react';

import Rehabilitation from './Rehabilitation';
import Mission from './Mission';
import Journey from './Journey';

class Home extends Component {
    render() {
        return (
            <div>
                <Rehabilitation />
                <Mission />
                <Journey />
            </div>
        );
    }
}

export default Home;
