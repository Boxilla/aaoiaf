
//helper que hace fetch sobre un personaje dado una url

//Las linea comentadas en el return estan asi porque no alcance a implemntear los helpers para esos atributos.

export const getCharacters = async( character) => {

    const url = `${character}`;
    const resp = await fetch( url );
    const  pj  = await resp.json();

    const unknown = 'Desconocido'

    const { url:url1, name, gender, culture, born, died, titles, aliases, father, mother, spouse, allegiances  } = pj
    return{ 
        id: url1,
        name: name?name:unknown,
        gender: gender?gender:unknown,
        culture: culture?culture:unknown,
        born: born?born:unknown,
        died: died?died:unknown,
        //titles: titles?getListOfItems(titles):unknown,
        //aliases: alliases?getListOfItems(alliases):unknown,
        father: father?pj.father:unknown,
        mother: mother?pj.mother:unknown,
        //spouse: spouse?getSpouses(spouse):unknown,
        //allegiances: allegiances?getAllegiances(aliases):unknown 
    }

}