import React from 'react'
import Aside from './Aside.js'
import Main from './Main.js'

import './style.css'

export default function StudentsList(){
    return(
        <div className="pag">
            <Main />
            <Aside />
        </div>
    )
}