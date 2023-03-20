let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
let id = user.id

// console.log(user);

let userMain = document.getElementById('userMain');

// let h1 = document.createElement('h1');
// h1.innerText = 'user - details';
//
// userMain.appendChild(h1);

function explorer(element) {

    for (const Key in element) {
        let value = element[Key];

        if (typeof value !== 'object') {

            let p = document.createElement('p');
            p.innerText = `${Key} --- ${value}`;

            userMain.appendChild(p);

        } else {
            explorer(value);
        }
    }
}

explorer(user);

let postDiv = document.createElement('div');
userMain.appendChild(postDiv);


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {

        let buttonDiv = document.getElementById('buttonDiv')
        let postButton = document.getElementById('button');

        postButton.onclick = function () {

            let h2Div = document.createElement('div');
            h2Div.classList.add('h2Div', 'flex', 'header');
            let h2 = document.createElement('h2');
            h2.innerText = 'post of current user';

            h2Div.appendChild(h2)

            postButton.style.display = 'none';
            buttonDiv.style.height = '100%';
            buttonDiv.style.width = '550px';

            let postTitleDiv = document.createElement('div');
            postTitleDiv.classList.add('postTitleDiv');

            for (const post of posts) {
                let titleDiv = document.createElement('div');
                titleDiv.classList.add('titleDiv', 'flex');
                let p = document.createElement('p');

                let a = document.createElement('a');
                a.innerText = 'post-details';
                a.href = '../post-details/post-details.html?data=' + JSON.stringify(post);

                p.innerText = `${post.title}`;

                titleDiv.append(p, a);
                postTitleDiv.appendChild(titleDiv)
            }
            buttonDiv.append(h2Div, postTitleDiv)
        };
    });

// let postButton = document.createElement('button');
// postButton.innerText = 'post of current user';
// postButton.onclick = function () {
//     location.href = `https://jsonplaceholder.typicode.com/users/USER_ID/posts`
// };
//
// document.body.appendChild(postButton);