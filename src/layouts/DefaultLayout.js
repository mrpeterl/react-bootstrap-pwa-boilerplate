import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Routes from '../Routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        const childProps = {};

        return (<div className="body">
            < Routes childProps={childProps}/> 
            </div>
        );
    }
}

export default withRouter(App);