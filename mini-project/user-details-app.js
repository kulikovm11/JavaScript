
const userBlock = document.querySelector('.users-block')
const userInfoBlock = document.querySelector('.user-info')
const userPostsBlock = document.querySelector('.user-posts-title')

let url = new URL(location.href)
let id = url.searchParams.get('id')
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then (response => response.json())
.then(user =>{

    let id = document.createElement('p')
    id.classList.add('user-id')
    id.innerText = `ID: ${user.id}`

    let name = document.createElement('h2')
    name.classList.add('name')
    name.innerText = user.name

    let username = document.createElement('h3')
    username.classList.add('username')
    username.innerText = user.username

    let mail = document.createElement('p')
    mail.classList.add('mail')
    mail.innerText = user.email

    let adressData = document.createElement('p')
    adressData.classList.add('adress')
    adressData.innerHTML = `${user.address.city}, ${user.address.street}, ${user.address.suite} <b>zip code:</b>${user.address.zipcode}`

    let geoposition = document.createElement('p')
    geoposition.classList.add('geo')
    geoposition.innerHTML = `<b>geo:</b> <b>lat:</b>${user.address.geo.lat} <b>lng:</b>${user.address.geo.lng}`

    let phone = document.createElement('p')
    phone.classList.add('phone')
    phone.innerHTML = `<b>Phone:</b> ${user.phone}`

    let web = document.createElement('p')
    web.classList.add('web')
    web.innerText = `${user.website}`

    let company = document.createElement('p')
    company.classList.add('company')
    company.innerHTML = `<b>Company:</b> "${user.company.name}" (<b>catchPhrase:</b>${user.company.catchPhrase}. <b>bs</b>:${user.company.bs})`








    userInfoBlock.append(id, name, username,mail, adressData, geoposition,phone, web, company)

})


const button = document.createElement('button')
button.classList.add('btn-post')
button.innerText = 'post of current user'
userPostsBlock.append(button)

let ul = document.createElement('ul')
ul.style.display = 'none'
userPostsBlock.append(ul)


    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {

                let li = document.createElement('li')
                li.innerText = post.title
                ul.append(li)

                let more = document.createElement('a')
                more.href = `post-details.html?post_id=${post.id}`
                more.target = '_blank'
                more.style.textDecoration = 'none'
                more.style.color = 'blueviolet'
                more.innerText = ` more`


                li.append(more)


            }
        })


button.addEventListener('click', function () {
    ul.style.display === 'none'? ul.style.display = 'block':ul.style.display = 'none'
})
