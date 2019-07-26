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
        alert('Submitted');
        console.log(this.state.name);
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <section className="container">
                    <h1 className="title">Register</h1>
                    <form className="form">
                        <input type="text" name="name" onChange={this.handleInputChange}     placeholder="Name" className="input" />
                        <input type="text" name="email" onChange={this.handleInputChange}    placeholder="Email" className="input" />
                        <input type="text" name="password" onChange={this.handleInputChange} placeholder="Password" className="input" />
                        <input type="submit" value="Register" onClick={this.handleSubmit} className="input submit"/>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Register;