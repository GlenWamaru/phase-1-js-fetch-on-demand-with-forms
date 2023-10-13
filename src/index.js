const init = () => {
    const inputForm = document.querySelector('form');
    const movieDetailsTitle = document.querySelector('#movieDetails h4');
    const movieDetailsSummary = document.querySelector('#movieDetails p');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
      const movieId = input.value;
  
      fetch(`http://localhost:4000/movies/${movieId}`)
        .then(response => {
          if (response.status === 404) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then(data => {
          movieDetailsTitle.innerText = data.title;
          movieDetailsSummary.innerText = data.summary;
        })
        .catch(error => {
          console.log(error);
          movieDetailsTitle.innerText = 'Movie not found';
          movieDetailsSummary.innerText = '';
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  