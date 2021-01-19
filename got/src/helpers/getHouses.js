

export const getHouses = async( direccion ) => {
    const url = direccion;
    const resp = await fetch( url );
    const  data  = await resp.json();

    const unknown = 'Desconocido'

    const houses = data.map( house => {
        return{
            id: house.url,
            name: house.name?house.name:unknown,
            region: house.region?house.region:unknown,
            word: house.words?house.words:unknown,
            currentLord: house.currentLord?house.currentLord:unknown
        }
    });

    return houses;
}