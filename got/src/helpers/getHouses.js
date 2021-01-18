

export const getHouses = async() => {
    const url = 'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50';
    const resp = await fetch( url );
    const  data  = await resp.json();

    const houses = data.map( house => {
        return{
            id: house.url,
            name: house.name,
            region: house.region,
            word: house.words,
            currentLord: house.currentLord
        }
    });

    return houses;
}