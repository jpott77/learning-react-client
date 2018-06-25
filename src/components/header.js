import React, { Component } from 'react';
import reactiv from "../images/logo/reactiv.png";
import worldCup from "../images/logo/worldcup2018.png";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="center-align">
                    <h2 >This is the Header</h2>
                </div>
                <div className="world-cup-logo-header card-image">
                    <img src={worldCup} alt="world-cup"/>
                </div>
                <div className="reactiv-logo-header card-image">
                    <img src={reactiv} alt="reactiv"/>
                </div>
            </div>
        );
    }
}

export default Header;