import React, { Fragment, Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers : { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify(this.state)
        });
    }
    
    render() {
        return (
            <Fragment>
                <section className="container">
                    <h1 className="title">Register</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" onChange={this.handleInputChange}     placeholder="Name" className="input" />
                        <input type="text" name="email" onChange={this.handleInputChange}    placeholder="Email" className="input" />
                        <input type="text" name="password" onChange={this.handleInputChange} placeholder="Password" className="input" />
                        <input type="submit" value="Submit" className="input submit"/>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Register;