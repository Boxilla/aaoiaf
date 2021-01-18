import React, { useState } from 'react'
import { getCharacters } from '../helpers/getCharacters'


export const HouseGridItem = ( {id, name, region, word, currentLord, members}) => {


    return (
        <div className='card'>
            <tr>Casa:{name?name:' Desconocido '}</tr>
            <tr>Lema:{word?word:' Desconocido '}</tr>
            <tr>Lord Regente:{currentLord?currentLord:' Desconocido '}</tr>
            <tr>Ubicación:{region?region:' Desconocido '}</tr>       
        </div>
    )
}
