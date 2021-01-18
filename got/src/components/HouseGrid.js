import React, { useState, useEffect } from 'react'
import { getHouses } from '../helpers/getHouses';
import { HouseGridItem } from './HouseGridItem';



export const HouseGrid = () => {


    const [houses, sethouses] = useState([]);

    useEffect( () =>{
        getHouses()
            .then( sethouses )
    }, [])

    

    return (
        <div>
                {
                    houses.map( house => (
                        <HouseGridItem 
                            key={ house.name }
                            { ...house}
                        />
                    ))
                }
        </div>
    )
}
