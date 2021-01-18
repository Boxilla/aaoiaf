import React, { useState } from 'react'
import { getCharacters } from '../helpers/getCharacters'


export const HouseGridItem = ( {id, name, region, word, currentLord}) => {


    const [charName, setcharName] = useState('Desconocido')
    const [char, setchar] = useState({})


    const handleOnClick = (char) => {

    }

    const getCharInfo = (currentLord) => {
        getCharacters(currentLord)
            .then( (pj) => setcharName( pj.name ))
            .then( (pj) => setchar( pj )) 
    }

    getCharInfo(currentLord);


    return (
        <div className='card'>
            <tr>Casa:{name}</tr>
            <tr>Lema:{word}</tr>
            <tr onClick={handleOnClick(char)}>Lord Regente:{charName}</tr>
            <tr>Ubicación:{region}</tr>       
        </div>
    )
}
