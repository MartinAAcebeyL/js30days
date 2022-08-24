// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const people1500 = inventors.filter(element => element.year>=1500 && element.year<=1600)
// console.log(people1500)

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const completeNames = inventors.map(element => element.first+" "+element.last);
// console.log(completeNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortInventors = inventors.sort((a,b)=>a.passed-b.passed)
// console.log(sortInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorsLive = inventors.reduce(myFuncReduce, 0);

function myFuncReduce(total, num) {
    return total + (num.passed- num.year)
}
// console.log(inventorsLive);

// 5. Sort the inventors by years lived
const inventorsLived = inventors.sort((a,b)=>{
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return nextInventor-lastInventor;
});
// console.log(inventorsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the inventors alphabetically by last name
const sortLast = inventors.sort((a,b)=> {
    const nameA = a.last;
    const nameB = b.last;
    if(nameA === nameB)
        return 0;

    return nameA < nameB?-1:1;
})
// console.log(sortLast);


const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// 1. sort Exercise
// Sort the people alphabetically by last name

const sortPeople = people.sort((a,b)=>{
    const [lastA, firstA] = a.split(", ");
    const [lastB, firstB] = b.split(", ");

    if(lastA === lastB)
        return 0;
    return lastA > lastB?1:-1;
});
// console.log(sortPeople)

// 1. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const transportation = data.reduce(myFuncReduce1,{})
function myFuncReduce1(obj, element) {
    if (!obj[element]) 
        obj[element] = 0;
    obj[element]++;
    return obj;
}

console.log(transportation);