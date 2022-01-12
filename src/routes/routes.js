import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import decodePage from '../pages/urlDecode/decodePage'
import encodePage from '../pages/urlEncode/encodePage'
import explanation from '../pages/explantionEspecial/expl'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={decodePage} />
                <Route path="/encode" exact component={encodePage} />
                <Route path="/explanation" exact component={explanation} />
            </Switch>
        </BrowserRouter>
    )
}