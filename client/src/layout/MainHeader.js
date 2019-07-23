import React, { Component } from 'react'

export class MainHeader extends Component {
    render() {
        return (
            <header className="navBar">
                <a href="/" className="logo link"> MyBabylon</a>

                <ul className="linkContainer">
                    <li><a href="/" className="link">Home</a></li>
                    <li><a href="/register" className="link">Register</a></li>
                    <li><a href="/login" className="link">Login</a></li>
                </ul>
            </header>
        )
    }
}

export default MainHeader;
