import React, { Fragment, Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    }

    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }

    handleSubmit = event => {
        alert('Submitted');
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <section className="container">
                    <h1 className="title">Register</h1>
                    <form className="form">
                        <input type="text" name="name" value={this.state.value} onChange={this.handleInputChange}     placeholder="Name" className="input" />
                        <input type="text" name="email" value={this.state.value} onChange={this.handleInputChange}    placeholder="Email" className="input" />
                        <input type="text" name="password" value={this.state.value} onChange={this.handleInputChange} placeholder="Password" className="input" />
                        <input type="submit" value="Register" className="input submit"/>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Register;