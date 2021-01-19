import React, { useState } from 'react'
import { HouseGrid } from './components/HouseGrid';

export const GoTApp = () => {

    //url de donde se obtienen los datos a mostrat en la pagina.
    const [url, seturl] = useState("https://www.anapioficeandfire.com/api/houses?page=15&pageSize=10")


    //Handlers para los botones que muestran otra "página" con información de las casas.
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


    return (
        <>
            <h2> GoT APP </h2> 
            <hr/>

                {
                   <HouseGrid
                        url={url}
                    />                
                }       

            <div className='buttons'>
                <button onClick={() => handleInicio()}> Inicio </button>
                <button onClick={() => handleAtras()}> Atrás</button>
                <button onClick={() => handleSiguiente()}> Siguiente</button>
                <button onClick={() => handleFinal()}> Final </button>
            </div>
        </>
    )
}
