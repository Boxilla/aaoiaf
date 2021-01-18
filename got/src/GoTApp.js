import React, { useState } from 'react'
//import { AddCategory } from './components/AddCategory';
import { HouseGrid } from './components/HouseGrid';

export const GoTApp = () => {

    return (
        <>
            <h2> GoT APP </h2> 
            <hr/>

            <ol>
                {
                   <HouseGrid/>                
                }       
            </ol>

            <div className='buttons'>
                <button> Inicio </button>
                <button> Atrás</button>
                <button> Siguiente</button>
                <button> Final </button>
            </div>
        </>
    )
}
