// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users\
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку
// user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let main = document.getElementById('main');

        for (const user of users) {
            let box = document.createElement('div');
            box.classList.add('box', 'flex');
            main.appendChild(box);

            let p = document.createElement('p');
            p.innerText = `${user.id} - ${user.name}`;

            let button = document.createElement('button');
            button.classList.add('button')
            button.innerText = 'user-details';
            button.onclick = function (e) {
                e.preventDefault();

                location.href = `../2-user/user-details.html?data=${JSON.stringify(user)}`;
            };

            box.append(p, button);
        }

    });
