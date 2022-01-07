import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import decodePage from '../pages/urlDecode/decodePage'
import encodePage from '../pages/urlEncode/encodePage'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/decode" exact component={decodePage} />
                <Route path="/encode" exact component={encodePage} />
            </Switch>
        </BrowserRouter>
    )
}