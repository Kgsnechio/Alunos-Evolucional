import React from 'react'
import { useState, useEffect } from 'react'

import api from '../../services/api.js'

import './alunos.css'
import './aside.css'

function Aside(){

    const [list, setList] = useState([])

    useEffect(() => {
        api.get('/').then(response => {
            setList(response.data)
        })
    }, [])

    return(
        <aside>
            <header className="title">
                <h1>Alunos Cadastrados</h1>
            </header>
            <ul>
            {list.map(student => (
                <li key={student.id} className="student">
                    <div>
                        <strong>{student.name}</strong>
                    </div> 
                    <div>   
                        <p>R.A. {student.ra}</p>
                    </div>
                    <div>    
                        <p>{student.degreeName}</p>
                    </div>
                    <div>
                        <p className="classeName">{student.classeName}</p>
                    </div>
                </li> 
            ))}
                
            </ul>
        </aside>   
    )
}

export default Aside