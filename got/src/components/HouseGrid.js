import React, { useState, useEffect } from 'react'
import { getHouses } from '../helpers/getHouses';
import { HouseGridItem } from './HouseGridItem';



export const HouseGrid = ({url})  => {

    const [houses, sethouses] = useState([]);

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
