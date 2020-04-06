import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StudentsList from './pages/Studentslist/Index.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={StudentsList} />
            </Switch>
        </BrowserRouter>
    )
}