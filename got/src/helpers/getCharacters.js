


export const getCharacters = async( character) => {
    
    const url = `${character}`;
    const resp = await fetch( url );
    const  data  = await resp.json();

    const characters = data.map( character => {
        return{
            id: character.url,
            name: character.name,
            gender: character.gender?character.gender:'Desconocido',
            culture: character.culture?character.culture:'Desconocido',
            born: character.born?character.born:'Desconocido',
            died: character.died?character.died:'Desconocido',
            //titles: character.titles?getListOfItems(character.titles):'Desconocido',
            //aliases: character.alliases?getListOfItems(character.alliases):'Desconocido',
            father: character.father?getCharacters(character.father):'Desconocido',
            mother: character.mother?getCharacters(character.mother):'Desconocido',
            //spouse: character.spouse?getSpouses(character.spouse):'Desconocido',
            //allegiances: character.allegiances?getAllegiances(character.aliases):'Desconocido' 
        }
    });
    
    return characters;
}