import React, { useState } from 'react'
import { getCharacters } from '../helpers/getCharacters'
import swal from 'sweetalert';


//Este componente se encarga de mostrar la información asociada a una casa y la devuelve

export const HouseGridItem = ( {id, name, region, word, currentLord}) => {


    const [charName, setcharName] = useState('Desconocido')
    const [char, setchar] = useState({})


    //Handler que muestra una "Sweet alert" cuando hacen click sobre el nombre del "Lord Regente"
    //No está implementado, la idea es que mostrara la info relacionada con el personaje y tambien se pudiera hacer...
    //...click sobre la información de otros atributos ahí presentes, como por ej el "padre" del personaje, mostrando tambien una sweet alert de este. 
    const handleOnClick = (personaje) => {
        swal(personaje)
    }

    //Luego obtener el link de algun personaje se hace un fetch en el helper "getCharacters" el cual devuelve la info sobre este
    const getCharInfo = (currentLord) => {
        getCharacters(currentLord)
            .then( (pj) => {
                setchar( pj );
                setcharName( pj.name );
                
            })
    }

    getCharInfo(currentLord);


    return (
        <div className='card'>
            <tr>Casa:{name}</tr>
            <tr>Lema:{word}</tr>
            <button onClick={() => handleOnClick(char)}>Lord Regente:{charName} </button>
            <tr>Ubicación:{region}</tr>       
        </div>
    )
}
