import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../component/Home.js'
import Map from '../component/Map'
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route path="/Map" component={Map} />
            </Switch>
        </BrowserRouter>

    )

}
export default Router