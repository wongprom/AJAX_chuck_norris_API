document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      //JSON.parse() Convert data from API to JavaScript Object
      const respons = JSON.parse(this.responseText);

      let output = '';

      if (respons.type === 'success') {
        respons.value.forEach(function(joke) {
          output += `
        <li>${joke.joke}</li>
        `;
        });
      } else {
        output += `
        <li>Something went wrong...It's not a joke</li>
        `;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
