import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <menu className="menu">
                    <div className="menu-button">
                        О себе
                    </div>
                    <div className="menu-button">
                        Технологии
                    </div>
                    <div className="menu-button">
                        Контакты
                    </div>
                </menu>
            </div>
        )
    }
}