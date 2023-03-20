//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
let postId = post.id;

let main = document.getElementById('main');

for (const pKey in post) {
    let value = post[pKey];

    let p = document.createElement('p');
    p.innerText = `${pKey} - ${value}`;

    main.appendChild(p);
}

function rec(item) {
    let comBox = document.getElementById('comBox')
    let box = document.createElement('div');
    box.classList.add('box');

    for (const iKey in item) {
        let value = item[iKey];

        if (typeof value !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${iKey} - ${value}`;

            box.appendChild(p);
            comBox.appendChild(box);
        } else {
            rec(value);
        }
    }
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(comments => {
        
        rec(comments);

    });


