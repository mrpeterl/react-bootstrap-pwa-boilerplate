import React, { Component } from "react";
import moment from 'moment'
import happy from '../assets/images/happy.png'

class App extends Component {
    render() {
        return (
            <div>
                <main role="main" className="container">
                    <div className="body my-3 p-3 text-center bg-light rounded shadow-sm">
                        <h2 className="sticky-top bg-light pb-2 mb-0">
                            Affective State Profile App
                        </h2>
                        <div className="text-center">
                            <img alt="" src={happy} className="rounded mx-auto" width="150vw" height="150vw"></img>
                        </div>
                        <br />
                        <div className="media text-muted pt-3">
                            <a href="/eventLog" className="mx-auto btn btn-primary btn-lg btn-block">Affective State Logging</a>
                        </div>
                        <br />
                        <div className="media text-muted pt-3">
                            <a href="/eventLog" className="mx-auto btn btn-primary btn-lg btn-block">Affective State Logging</a>
                        </div>
                        <br />
                        <div className="media text-muted pt-3">
                            <a href="/eventLog" className="mx-auto btn btn-primary btn-lg btn-block">Affective State Logging</a>
                        </div>
                        <br />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
