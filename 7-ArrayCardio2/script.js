const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const ver = elemen => console.log(elemen);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?

const old19People = people.some(e => new Date().getFullYear() - e.year > 19)
ver(old19People)

// Array.prototype.every() // is everyone 19?
const evryOld19People = people.every(e => new Date().getFullYear() - e.year > 19)
ver(evryOld19People)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const id823423 = comments.find(element => element.id === 823423);
ver(id823423)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const id823423Index = comments.findIndex(element => element.id === 823423);
ver(id823423Index)

const newComments = [
    ...comments.slice(0, id823423Index),
    ...comments.slice(id823423Index + 1)
];

ver(newComments);