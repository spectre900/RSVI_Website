import React, { Component } from 'react';
import Collaboration from './Collaboration';
import Rehabilitation from './Rehabilitation/Rehabilitation';
import Mission from './Mission/Mission';
import Journey from './Journey/Journey';
import Capsule from './Capsule/Capsule';
import Success from './Success';
import {SliderData} from './SliderData';
import ImageSlider from './ImageSlider';
import Work from './WorksComp/Work';


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
