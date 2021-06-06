const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
// serie de pokémon divisibles por 3
const divisPor3 = pokémon.filter(({ id }) => !(id % 3));
console.log({ divisPor3 });

//Pokemones tipo fuego
const tipoFuego = pokémon.filter(({ types }) => types.includes("fire"));
console.log({ tipoFuego });

//mas de un tipo de pokémon
const masDe1Type = pokémon.filter(({ types }) => types.length > 1);
console.log({ masDe1Type });

//matriz con solo los nombres de pokémon
const soloNombres = pokémon.map(({ name }) => name);
console.log({ soloNombres });

//identificacion mayor a 99
const idsMasDe99 = pokémon.filter(({ id }) => id > 99).map(({ name }) => name);
console.log({ idsMasDe99 });

// pokémon veneno
const soloVeneno = pokémon
  .filter(({ types, types: [firstItem] }) => types.length === 1 && firstItem === "poison")
  .map(({ name }) => name);
console.log({ soloVeneno });

//tipo de pokemon volador
const primerTypeDePokemonDeFlying = pokémon
  .filter(({ types }) => types[1] === "flying")
  .map(({ types }) => types[0]);
console.log({ primerTypeDePokemonDeFlying });

// tipo normal
const tipoNormal = pokémon.filter(({ types }) => types.includes("normal")).length;
console.log({ tipoNormal });