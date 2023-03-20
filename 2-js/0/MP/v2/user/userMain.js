// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
//

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
let id = user.id

let container = document.createElement('div');
document.body.appendChild(container);

let explorer = function (el) {

    for (const elKey in el) {
        let value = el[elKey];

        if (typeof value !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${elKey} --- ${value}`;

            container.appendChild(p);
        } else {
            explorer(value);
        }
    }
};

explorer(user);


let buttonDiv = document.createElement('div');
container.appendChild(buttonDiv);

let button = document.createElement('button');
buttonDiv.appendChild(button);
button.innerText = 'post of current user';
button.onclick = function (e) {
    e.preventDefault();

    button.style.display = 'none';

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {

            for (const post of posts) {
                let box = document.createElement('div');
                buttonDiv.appendChild(box);

                let a = document.createElement('a');
                a.innerText = 'post-details';
                a.href = `../post/post-details.html?data=${JSON.stringify(post)}`;


                let p = document.createElement('p');
                p.innerText = `${post.title}`;
                box.append(p,a);
            }


        });


};


