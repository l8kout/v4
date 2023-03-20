// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
let userId = user.id;

let userMain = document.getElementById('userMain');

function recursion(element) {

    for (const uKey in element) {
        let value = element[uKey];

        if (typeof value !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${uKey} - ${value}`;
            userMain.appendChild(p);
        } else {
            recursion(value);
        }
    }
}

recursion(user);

let button = document.getElementById('button');
button.onclick = function (e) {
    e.preventDefault()
    button.style.display = 'none';

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            let buttonDiv = document.getElementById('buttonDiv');
            buttonDiv.style.display = 'none';

            let newDiv = document.createElement('div');
            newDiv.classList.add('newDiv');
            container.appendChild(newDiv);

            for (const post of posts) {
                let box = document.createElement('div');
                box.classList.add('box', 'flex');
                let p = document.createElement('p');
                p.innerText = `${post.title}`

                let a = document.createElement('a');
                a.innerText = 'post-details';
                a.href = `../3-post/post-details.html?data=${JSON.stringify(post)}`;

                box.append(p, a);
                newDiv.appendChild(box);
            }
        });

    };




