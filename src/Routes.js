import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AffectiveStateLogging from './pages/AffectiveStateLogging';
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default ({ childProps }) => (
    <Switch>
        <Route path="/" exact component={Home} props={childProps} />
        <Route path="/eventLog" exact component={AffectiveStateLogging} props={childProps} />
        <Route path="*" component={PageNotFound}  props={childProps}/>
    </Switch>
);
