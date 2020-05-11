document.querySelector('.button').addEventListener('click', () => {
    const number = document.querySelector('input[type="number"]');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number.value}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if (response.type === "success") {
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`;
                    document.querySelector('.tbody').innerHTML = output;
                });
            } else {
                console.log('failure')
            }
        }
    }

    xhr.send();
});