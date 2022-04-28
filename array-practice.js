const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP**************************************************************************
//1. Get array of all names(normal map syntax)
const names = characters.map((character) => {
    return character.name
})
// console.log(names)
//2. Get array of all heights(one line map syntax)
const heights = characters.map((character) => character.height)
// console.log(heights)
//3. Get array of objects with just name and height properties(multiple property syntax)
const minifiedObject = characters.map((character) => ({
    name: character.name, 
    height: character.height
}))
// console.log(minifiedObject)
//4. Get array of all first names
const firstNames = characters.map((character) => {
   return character.name.split(" ")[0]
})
// console.log(firstNames)


//***REDUCE**************************************************************************
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER**************************************************************************
//1. Get characters with mass greater than 100
const filterChar = characters.filter((character) => character.mass > 100)
// console.log(filterChar)
//2. Get characters with height less than 200
const filterHeight = characters.filter((character) => {
    return character.height < 200
})
// console.log(filterHeight)
//3. Get all male characters
const filterMale = characters.filter((character) => {
    return character.gender === 'male'
})
// console.log(filterMale)
//4. Get all female characters
const filterFemale = characters.filter((character) => character.gender === "female")
// console.log(filterFemale)


//***SORT**************************************************************************
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY**************************************************************************
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME**************************************************************************
//1. Is there at least one male character?
const anyMaleCharacters = characters.some((character) => {
    return character.gender === 'male'
})
console.log(anyMaleCharacters)
//2. Is there at least one character with blue eyes?
const characterBlueEyes = characters.some((character) => {
    return character.eye_color === 'blue'
})
console.log(characterBlueEyes)
//3. Is there at least one character taller than 210?
const anyTallerCharacters = characters.some((character) => character.height > 210)
console.log(anyTallerCharacters)
//4. Is there at least one character that has mass less than 50?
const anyHeavyCharacters = characters.some(character => character.mass < 50)
console.log(anyHeavyCharacters)