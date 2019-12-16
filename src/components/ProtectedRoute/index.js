import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest} 
            render={props => {
                if (window.localStorage.getItem('userKey')) {
                    return (
                        <Component {...props} />
                    );
                }

                return (
                    <Redirect to="/autorise" />
                )
                    }}
        />
    );
};

export default withRouter(ProtectedRoute);