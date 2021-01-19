import React, { useState } from 'react'
import { HouseGrid } from './components/HouseGrid';

export const GoTApp = () => {

    
    const [url, seturl] = useState("https://www.anapioficeandfire.com/api/houses?page=15&pageSize=10")

    const handleInicio = () => {
        seturl(`${url} : rel="first"`)
    }
    const handleAtras = () => {
        seturl(`${url} : rel="prev"`)
    }
    const handleSiguiente = () => {
        seturl(`${url} : rel="next"` )
    }
    const handleFinal = () => {
        seturl(`${url} : rel="last"`)
    }


    console.log('url' , url)
    return (
        <>
            <h2> GoT APP </h2> 
            <hr/>

            <ol>
                {
                   <HouseGrid
                        url={url}
                    />                
                }       
            </ol>

            <div className='buttons'>
                <button onClick={() => handleInicio()}> Inicio </button>
                <button onClick={() => handleAtras()}> Atrás</button>
                <button onClick={() => handleSiguiente()}> Siguiente</button>
                <button onClick={() => handleFinal()}> Final </button>
            </div>
        </>
    )
}
