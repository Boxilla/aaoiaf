import React, { useState } from 'react'
import { getCharacters } from '../helpers/getCharacters'
import swal from 'sweetalert';


export const HouseGridItem = ( {id, name, region, word, currentLord}) => {


    const [charName, setcharName] = useState('Desconocido')
    const [char, setchar] = useState({})


    const handleOnClick = (personaje) => {
        swal('hola', personaje)
    }

    const getCharInfo = (currentLord) => {
        getCharacters(currentLord)
            .then( (pj) => {
                console.log(pj)
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
