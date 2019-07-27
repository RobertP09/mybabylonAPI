import React, { Fragment, Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            name: '',
            email: '',
            password: '',
            verifyPassword: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }
    //put our Data into state
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    //Handle form submission
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }

        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers : { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify(data)
        });
    }
    //Used to show password
    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    checkPassword() {
        if(this.state.verifyPassword !== this.state.password) {
            console.log(`Passwords don't match`);
            console.log(this.state.verifyPassword);
            console.log(this.state.password);
        } else {
            console.log('Passwords match');
        }
    }

    render() {
        return (
            <Fragment>
                <section className="container">
                    <h1 className="title">Register</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" 
                            name="name" 
                            onChange={this.handleInputChange} 
                            placeholder="Userame" 
                            className="input"
                            min="6" 
                            required
                        />
                        <input type="email" 
                            name="email" 
                            onChange={this.handleInputChange} 
                            placeholder="Email" 
                            className="input" 
                            required
                        />
                        <div className="passwordContainer">
                            <input type={ this.state.hidden ? 'password' : 'text' }
                                name="password" 
                                onChange={this.handleInputChange} 
                                placeholder="Password"  
                                className="input password"
                                min="8"
                                maxLength="16" 
                                required 
                            />
                            <input type="checkbox" 
                                onClick={this.toggleShow} 
                                className="button passwordToggle" 
                            />
                        </div>
                        <input type="text" 
                            name="verifyPassword" 
                            className="input"
                            placeholder="Verify Password"
                            onChange={this.handleInputChange}
                            onKeyUp={this.checkPassword}
                            required
                        />
                        <input type="submit" value="Submit" className="input submit" disabled/>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Register;