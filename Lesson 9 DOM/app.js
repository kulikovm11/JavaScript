// - є масив

let body = document.querySelector('body')



// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//

// console.log(body);
// for (const simpson of simpsons) {
// let division = document.createElement('div')
//     body.appendChild(division)
//     division.classList.add('member')
//
//
//     //  V1
//
//     // division.innerHTML = `<img src="${simpson.photo}"> <h2>${simpson.name} ${simpson.surname} </h2>
//     //                         <p>Age:${simpson.age}</p>
//     //                         <p>Age:${simpson.info}</p>  `
//
//     //  V2
//     let image = document.createElement('img')
//     image.src = simpson.photo
//
//
//     let h2 = document.createElement('h2')
//     h2.innerText = `${simpson.name} ${simpson.surname}`
//
//     let age = document.createElement('p')
//     age.innerText = `Age: ${simpson.age}`
//
//     let info = document.createElement('p')
//     info.innerText = `${simpson.info}`
//
//
//     division.append(image, h2,age, info)
//
//
//
// }
// Дополнительно forEach ради нтереса

// let doIt = simpsons.forEach(function (simpson){
//     let division = document.createElement('div')
//     body.appendChild(division)
//      division.classList.add('member')
//
//     let image = document.createElement('img')
//     image.src = simpson.photo
//
//     let h2 = document.createElement('h2')
//     h2.innerText = `${simpson.name} ${simpson.surname}`
//
//     let age = document.createElement('p')
//     age.innerText = `Age: ${simpson.age}`
//
//     let info = document.createElement('p')
//     info.innerText = `${simpson.info}`
//
//
//
//     division.append(image, h2, age, info)
// })


//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// // ------------------
// //
//
//
// for (const course of coursesArray) {
//
//     let division = document.createElement('div')
//     body.append(division)
//     division.style.border = '1px solid black'
//     division.style.padding = '10px'
//     division.style.margin = '10px'
//
//     let title = document.createElement('h1')
//     title.innerText = `${course.title}`
//
//     let timeDescription = document.createElement('h3')
//     timeDescription.innerText = `Months: ${course.monthDuration}  Hours: ${course.hourDuration}`
//
//     let modulesList = document.createElement('ul')
//
//
//     for (const listElement of course.modules) {
//         let list = document.createElement('li')
//         list.innerText =`${listElement}`
//         modulesList.append(list)
//
//     }
//
//
//     division.append(title, timeDescription, modulesList)
//
// }


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let block = document.createElement('div')
// block.classList.add('wrap', 'collapse', 'alpha', 'beta')
//
// let text = document.createElement('p')
// text.innerText = `Some text`
// block.append(text)
//
// body.append(block)
//
// let block2 = block.cloneNode(true)
// body.append(block2)
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main','Products','About us','Contacts']
// let menuItem = document.querySelector('.menu')
//
// for (const item of arr) {
//     let list = document.createElement('li')
//     menuItem.appendChild(list)
//     list.innerText = `${item}`
//
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// coursesAndDurationArray.forEach(function (course) {
//     let division = document.createElement('div')
//     division.style.border = '1px dashed black'
//     body.append(division)
//     let titleOfCourse = document.createElement('h2')
//     titleOfCourse.innerText = `${course.title}`
//     let duration = document.createElement('h3')
//     duration.innerText = `Duration: ${course.monthDuration}`
//
//     division.append(titleOfCourse,duration)
// })






// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

// coursesAndDurationArray.forEach(function (course) {
//     let division = document.createElement('div')
//     division.classList.add('item')
//     body.append(division)
//
//     let titleOfCourse = document.createElement('h1')
//     titleOfCourse.classList.add('heading')
//     titleOfCourse.innerText = `${course.title}`
//
//     let description = document.createElement('p')
//     description.classList.add('description')
//     description.innerText = `Duration is ${course.monthDuration} months`
//
//
//     division.append(titleOfCourse, description)
//
// })




// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let justElement = document.createElement('h2')
// justElement.id = 'text'
// justElement.innerText = 'Hello world'
// body.appendChild(justElement)
//
// let button = document.createElement('button')
// button.textContent = 'click me'
// body.appendChild(button)
//
// button.onclick = function (){
//     justElement.style.display = 'none'
// }


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

// let f1 = document.forms.f1
//
// f1.onsubmit = function (e){
//
//     if(this.ageInput.value < 18) {
//         alert('You so young!')
//     }else{
//         alert('OK')
//     }
//
// }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

