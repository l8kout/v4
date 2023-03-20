let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let textDiv = document.getElementById('textDiv');

for (const postEl in post) {
    let item = post[postEl];
    let info = document.createElement('p');
    info.innerText = `${postEl} - ${item}`;

    textDiv.appendChild(info);
}

let id = post.id;

let commentDiv = document.getElementById('commentDiv');

let comments = document.getElementById('comments');

commentDiv.appendChild(comments);


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(value => {

        for (const vKey in value) {
            let comment = value[vKey]

            let comm = document.createElement('div');
            comm.classList.add('comm');

            let id = document.createElement('p');
            id.innerText = `id - ${comment.id}`;

            let postId = document.createElement('p');
            postId.innerText = `postId - ${comment.postId}`;

            let email = document.createElement('p');
            email.innerText = `email - ${comment.email}`;

            let name = document.createElement('p');
            name.innerText = `name - ${comment.name}`;

            let body = document.createElement('p');
            body.innerText = `body - ${comment.body}`;

            comm.append(id, name, email, postId, body);

            comments.appendChild(comm);
        }
    })
