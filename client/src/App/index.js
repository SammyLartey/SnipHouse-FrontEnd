import React, { Suspense } from 'react';
import routes from '../routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import Home from '../Pages/Home/Home';
import './App.scss';
import loader from 'sass-loader';
require('dotenv').config();
function App() {
    const publicRoute = routes.map((route, index) => {
        return route.component ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => <route.component {...props} />}
            />
        ) : null;
    });
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                {publicRoute}
                <Route component={Home}></Route>
            </Switch>
        </Suspense>
    );
}

export default App;
