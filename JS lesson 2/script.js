// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [true, 10, 'Hello', 'world', 156, 11, 'January', 'September', true, false]
// console.log(`${arr[2]} ${arr[3]}`);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 ={
//     title: 'The Silmarillion',
//     pageCount: 663,
//     genre:'phantasy'};
//
// let book2 = {
//     title: 'The Magician\'s Nephew',
//     pageCount: 181,
//     genre:'novel'};
//
// let book3 = {
//     title: 'Javascript and jQuery',
//     pageCount: 641,
//     genre:'other'};



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
//  book1.authors = ['name','age']
// book1.name = 'John Ronald Reuel Tolkien'
// book1.age = 81

// let book1 ={
//     title: 'The Silmarillion',
//     pageCount: 663,
//     genre:'phantasy',
//     authors: [{
//         name:'John Ronald Reuel Tolkien',
//         age:81
//     }]};
// let book2 = {
//     title: 'The Magician\'s Nephew',
//     pageCount: 181,
//     genre:'novel',
//     authors: [{
//         name:'Clive Staples Lewis',
//         age:64
//     }]};
// let book3 = {
//     title: 'Javascript and jQuery',
//     pageCount: 641,
//     genre:'other',
//     authors: [{
//         name:'Jon Duckett',
//         age:40
//     }]}


// console.log(book1);
// console.log(book2);
// console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name:'Roger Lawson',
        username:'roger',
        password:'gabriel'},
    {
        name:'Bella Dean',
        username:'bella.dean',
        password:'macman123'},
    {
        name:'Amber Berry',
        username:'Berry',
        password:'47crow47'},
    {
        name:'Peyton Ford',
        username:'Peyton99',
        password:'11pearson6565'},
    {
        name:'Ida Stevens',
        username:'ida.stevens',
        password:'wheeler2812'},
    {
        name:'Dylan Mills',
        username:'Dylan01',
        password:'9908DM'},
    {
        name:'Emily Dunn',
        username:'EmyLee',
        password:'44istheman141455'},
    {
        name:'Gabriella Porter',
        username:'Gaby89',
        password:'alucard181'},
    {
        name:'Kristin Parker',
        username:'Kriss55',
        password:'fangM14'},
    {
        name:'Jon Caldwell',
        username:'Jon.Caldwell',
        password:'Jon161616'}

]
console.log(users[4].password)

