import React, {Component} from 'react';
import './About.css'

export default class About extends Component {
    render() {
        return (<div className="wrapper">
            <div className="Image-background"></div>
            <div className="About-info">
                <div className="About-info-title">
                    O себе
                </div >
                <span className="About-info-block">1. C 2018 работаю в IT</span><br/>
                <span className="About-info-block">2. C 2019 работаю в frontend разработчиком</span><br/>
                <span className="About-info-block">3. C 2019 работаю в frontend разработчиком</span><br/>
            </div>
            </div>
        )
    }
}