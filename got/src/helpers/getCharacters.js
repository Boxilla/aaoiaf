


export const getCharacters = async( character) => {
    
    const url = `${character}`;
    const resp = await fetch( url );
    const  pj  = await resp.json();

    return{
        id: pj.url,
        name: pj.name?pj.name:'Desconocido',
        gender: pj.gender?pj.gender:'Desconocido',
        culture: pj.culture?pj.culture:'Desconocido',
        born: pj.born?pj.born:'Desconocido',
        died: pj.died?pj.died:'Desconocido',
        //titles: character.titles?getListOfItems(character.titles):'Desconocido',
        //aliases: character.alliases?getListOfItems(character.alliases):'Desconocido',
        father: pj.father?pj.father:'Desconocido',
        mother: pj.mother?pj.mother:'Desconocido',
        //spouse: character.spouse?getSpouses(character.spouse):'Desconocido',
        //allegiances: character.allegiances?getAllegiances(character.aliases):'Desconocido' 
    }
    
}