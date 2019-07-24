import React from 'react';

export default class MainHeader extends React.Component {
    state = {  }
    render() {
        return (
            <header className="navBar">
                <div className="logo">
                    <a href="/" className="link">MyBabylon</a>
                </div>
                <ul className="linkContainer">
                    <li><a href="/" className="link">Home</a></li>
                    <li><a href="/register" className="link">Register</a></li>
                    <li><a href="/login" className="link">Login</a></li>
                </ul>
            </header>
        );
    }
}