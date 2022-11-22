// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 =  'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 =  'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 =  'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні'

//                  V1
// function stringToarray (string){
// let arr = string.split(' ')
//     console.log(arr);
// }
//
// stringToarray(str)



//                  V2

// let stringToarray = string => console.log(string.split(' '))
// stringToarray(str)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr);
// let stringArr = arr.map(function (arr){
//     let newItem = arr+""
//     return newItem
// })
//
// console.log(stringArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// function sortNums (array,direction){
//
//     if(direction==='ascending'){
//
//        array.sort(function (a,b){
//            return a-b
//        })
//
//         console.log(array);
//
//
//     }else if(direction === 'descending'){
//
//         array.sort(function (a,b){
//             return b-a
//         })
//
//         console.log(array);
//
//     }
// }
// sortNums(nums,'ascending')
// sortNums(nums,'descending')

//
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let duration = coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration)
//
// console.log(duration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let showLenght = coursesAndDurationArray.filter( course => course.monthDuration > 5)
// console.log(showLenght);


// описати колоду карт


let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];


// - знайти піковий туз
// let findAce = deck.filter(card => card.value === 'Ace' && card.cardSuit === 'Spade')
// console.log(findAce);

// - всі шістки

// let findSix = deck.filter(card => card.value === 6)
// console.log(findSix);


// - всі червоні карти
// let findRed = deck.filter(card => card.color === 'Red')
// console.log(findRed);


// - всі буби

// let findDiamonds = deck.filter(card => card.cardSuit === 'Diamonds')
// console.log(findDiamonds);

// - всі трефи від 9 та більше

// let findClubs = deck.filter(card => card.cardSuit === 'Clubs' && (card.value>8 || card.value.length>2))

//or

// let findClubs = deck.filter(card => card.cardSuit === 'Clubs' && card.value>'8')

// console.log(findClubs);
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let sortOfDeck = deck.reduce((accumulator, card) =>{
//    if(card.cardSuit === 'Spade'){
//        accumulator.diamonds.push(card.value, card.color)
//    } else if(card.cardSuit === 'Diamonds'){
//        accumulator.spades.push(card.value, card.color)
//    } else if(card.cardSuit === 'Hearts'){
//        accumulator.hearts.push(card.value, card.color)
//    }else if(card.cardSuit === 'Clubs'){
//        accumulator.clubs.push(card.value, card.color)
//    }
//
//     return accumulator
//
//
//
//
// },{spades:[],diamonds:[],hearts:[],clubs:[]} )
//
// console.log(sortOfDeck);
