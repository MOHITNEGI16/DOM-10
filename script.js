const joke = document.getElementById("jokes");
const buttonJokes = document.getElementById("jokesButton");
const apiKey = 'jMXLflGkWj1xYf/5ygDRew==AotnuBftbtXrvlpV';

buttonJokes.addEventListener('click',()=>{
  joke.innerText = 'Updating...';
  buttonJokes.innerText = 'Loading...';
  

 
// Assuming you have an API key, replace 'YOUR_API_KEY' with your actual API key
// const apiKey = 'YOUR_API_KEY';

// Function to fetch dad jokes
const fetchDadJoke = () => {
  return fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
    headers: {
      'X-API-KEY': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
};

// Example usage
fetchDadJoke()
  .then((data) =>{joke.innerText=(data[0].joke);buttonJokes.innerText='Tell Me A Joke';})
  .catch(error => console.error('Error:', error));

  
  })
