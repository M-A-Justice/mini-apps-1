// grab data from input - DONE
// post data to server - DONE
// edit data from script managed server side
// server sends response back to the client
// display response
const form = document.getElementById('json-form');

function submit(event) {
  event.preventDefault();
  const json = document.getElementById('user-json').value;

  fetch('/submit', {
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: json,
  })
    .then(() => {
      document.getElementById('user-json').value = '';
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

form.onsubmit = submit;
