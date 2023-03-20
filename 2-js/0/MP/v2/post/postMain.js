//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let posts = JSON.parse(url.searchParams.get('data'));
let id = posts.id

let container = document.createElement('div');
document.body.appendChild(container)



for (const pKey in posts) {
    let value = posts[pKey];

    let p = document.createElement('p');
    container.appendChild(p);
    p.innerText = `${pKey} --- ${value}`;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(comments => {

        let commentDiv = document.createElement('div');
        container.appendChild(commentDiv);

        function rec(el) {
            let box = document.createElement('div');

            for (const eKey in el) {

                if (typeof el[eKey] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${eKey} - ${el[eKey]}`;

                    box.appendChild(p);
                    commentDiv.appendChild(box);
                } else {
                    rec(el[eKey]);
                }
            }
        }

        rec(comments);



        // let explorer = function (el) {
        //
        //     let box = document.createElement('div');
        //
        //     for (const elKey in el) {
        //         let value = el[elKey];
        //
        //         if (typeof value !== 'object') {
        //             let p = document.createElement('p');
        //             p.innerText = `${elKey} - ${value}`;
        //
        //             box.appendChild(p);
        //             commentDiv.appendChild(box)
        //         } else {
        //             explorer(value);
        //         }
        //     }
        // };
        //
        // explorer(comments);



    });


