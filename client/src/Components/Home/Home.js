import React, { Component } from 'react';

import Rehabilitation from './Rehabilitation/Rehabilitation';
import Capsule from './Capsule/Capsule';
import Mission from './Mission/Mission';
import Journey from './Journey/Journey';

class Home extends Component {
    render() {
        return (
            <div>
                <Rehabilitation />
                <Mission />
                <Journey />
                <Capsule />
            </div>
        );
    }
}

export default Home;
