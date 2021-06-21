import React, { Component } from 'react';

import InTouch from './InTouch/InTouch';
import ContactUs from './ContactUs/ContactUs';

class GetInTouch extends Component {
    render() {
        return (
            <div>
                <InTouch />
                <ContactUs />
            </div>
        );
    }
}

export default GetInTouch;
