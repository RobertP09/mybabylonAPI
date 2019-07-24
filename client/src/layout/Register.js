import React, { Fragment } from 'react';

export default class Register extends React.Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <section className="container">
                    <form action="" method="post" className="form">
                        Name: <input type="text"/>
                        Email:<input type="text"/>
                        Password:<input type="text"/>
                    </form>
                </section>
            </Fragment>
        );
    }
}