// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users\
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра
// має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        console.log(users);
        let container = document.createElement('div');
        document.body.appendChild(container);

        for (const user of users) {
            let box = document.createElement('div');
            container.append(box);
            let p = document.createElement('p');
            p.innerText = `${user.id} - ${user.name}`;

            let button = document.createElement('button');
            box.appendChild(button);
            button.innerText = 'user-details';
            button.onclick = function () {
                location.href = `../user/user-details.html`;
            }

            box.append(p, button);

        }
    });