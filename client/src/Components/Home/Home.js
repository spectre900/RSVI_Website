import React, { Component } from 'react';

import Mission from './Mission/Mission';
import Journey from './Journey/Journey';
import Capsule from './Capsule/Capsule';
import Rehabilitation from './Rehabilitation/Rehabilitation';

import Success from './Success';
import Work from './WorksComp/Work';
import {SliderData} from './SliderData';
import ImageSlider from './ImageSlider';
import Collaboration from './Collaboration';


class Home extends Component {
    render() {
        return (
            <div>
                <Rehabilitation />
                <Journey />
                <Mission />
                <Capsule />
            </div>
        );
    }
}

export default Home;
