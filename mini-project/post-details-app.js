
const postBlock = document.querySelector('.post')


let url = new URL(location.href)
let id = url.searchParams.get('post_id')
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {

        let uId = document.createElement('p')
        uId.innerHTML = `<b>User ID:</b> ${post.userId}`

        let postId = document.createElement('p')
        postId.innerHTML = `<b>Post ID:</b> ${post.id}`

        let title = document.createElement('p')
        title.innerHTML = `<b>Title:</b> ${post.title}`

        let pBody = document.createElement('p')
        pBody.innerHTML = `<b>Body:</b> ${post.body}`



        postBlock.append(uId, postId, title, pBody)



    })



const commentBlock = document.querySelector('.comment')
let title = document.createElement('h3')
title.innerText = 'Comments:'
commentBlock.append(title)


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {
            for (const comment of comments) {
                    let comentCard = document.createElement('div')
                    comentCard.classList.add('comment-card')
                    commentBlock.append(comentCard)

                let postID = document.createElement('p')
                postID.innerHTML = `<b>Post ID:</b>${comment.postId}`

                let id = document.createElement('p')
                id.innerHTML = `<b>ID:</b>${comment.id}`

                let name = document.createElement('h3')
                name.innerHTML = `<b>Name:</b>${comment.name}`

                let email = document.createElement('p')
                email.innerHTML = `<b>Email:</b>${comment.email}`

                let body = document.createElement('p')
                body.innerHTML = `<b>Email:</b>${comment.body}`

                comentCard.append(postID,id,name,email,body )

            }
    })




