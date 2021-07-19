'use strict';

const parag = $('p');
const btt = $('input');

const joke = () => {
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(response => {
            return response.json();
        }) 
        .then(item => {
            let jk = item.value;
            parag.empty();
            parag.append(jk);
        })
        .catch(error => {
            parag.append(error);
        })
}

btt.on ('click', joke);