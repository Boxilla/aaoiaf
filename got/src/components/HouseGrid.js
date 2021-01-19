import React, { useState, useEffect } from 'react'
import { getHouses } from '../helpers/getHouses';
import { HouseGridItem } from './HouseGridItem';


//En este componente se obtiene se recibe la información proporcionada por la API y luego esta es enviada al 
// componente HouseGridItem que desestructura la  información para mostrar solo la info pedida

export const HouseGrid = ({url})  => {

    const [houses, sethouses] = useState([]);

    //Se hace uso del helper get houses, el cual hace una request a la API y retorna la información de las casas
    getHouses(url)
        .then( sethouses )


    return (
        <div>
                {
                    
                    houses.map( house => (
                        <HouseGridItem 
                            key={ house.name }
                            {...house}
                        />
                    ))
                }
        </div>
    )
}
