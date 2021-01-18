import React, { useState, useEffect } from 'react'
import { getHouses } from '../helpers/getHouses';
import { HouseGridItem } from './HouseGridItem';



export const HouseGrid = ({category}) => {


    const [houses, sethouses] = useState([]);

    useEffect( () =>{
        getHouses()
            .then( sethouses )
    }, [])

    

    return (
        <div>
            <h3>{category}</h3>
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
