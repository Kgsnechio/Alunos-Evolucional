import React from 'react'
import { useState } from 'react'
import api from '../../services/api'

import './main.css'

export default function Main(){

    const [name, setName] = useState('')
    const [ra, setRa] = useState('')
    const [degreeId, setDegreeId] = useState('')
    const [classId, setClassId] = useState('')

    async function handleRegister(){

        const data = ({
            name,
            ra,
            degreeId,
            classId
        })

        await api.post('/', data)

    }

    return( 
        <div className="container">
        <header className="menu">
            <h1>Menu</h1>
        </header>
        <nav> 
            <div className='createStudent-container'>
                <form onSubmit={handleRegister}>
                    <h1>Cadastrar Aluno</h1>

                    <input 
                    placeholder="Nome do Aluno"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    placeholder="R.A. do Aluno"
                    value={ra}
                    onChange={e => setRa(e.target.value)} 
                    />

                    <select 
                    name="Série do Aluno"
                    value={degreeId}
                    onChange={e => setDegreeId(e.target.value)} 
                    >
                        <option value="1">Ensino Fundamental</option>
                        <option value="8">4º ano do ensino fundamental</option>
                        <option value="9">5º ano do ensino fundamental</option>
                        <option value="10">6º ano do ensino fundamental</option>
                        <option value="11">7º ano do ensino fundamental</option>
                        <option value="12">8º ano do ensino fundamental</option>
                        <option value="13">9º ano do ensino fundamental</option>
                        <option value="2">1° ano do ensino médio</option>
                        <option value="3">2° ano ensino médio</option>
                        <option value="4">3° ano do ensino médio</option>
                        <option value="5">Cursinho</option>
                        <option value="6">Estudo em casa</option>
                        <option value="7">Outros</option>
                    </select> 

                    <select 
                    name="Classe do Aluno" 
                    className="classeAluno"
                    value={classId}
                    onChange={e => setClassId(e.target.value)}
                    >
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                        <option value="5">E</option>
                        <option value="6">F</option>
                    </select>

                    <button className="button" type="submit">Cadastar</button>
                </form>
            </div>
        </nav> 
        </ div>
    )
}
