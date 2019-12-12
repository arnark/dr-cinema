import * as tokenService from './tokenService';

const ENDPOINT = 'http://api.kvikmyndir.is/movies';
const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming'

export const getAllMovies = async () => {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': await tokenService.getNewToken()
    }
  }).then((movies) => movies.json()).then((movies) => movies)
}

export const getUpcomingMovies = async () => {
  return fetch(UPCOMINGENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': await tokenService.getNewToken()
    }
  }).then((upcomingmovies) => upcomingmovies.json()).then((upcomingmovies) => upcomingmovies)
}

export const getMovieByMongoId = async (mongoId) => {
  return fetch(`${ENDPOINT}?mongoid=${mongoId}`, {
    method: 'GET',
    headers: {
      'x-access-token': await tokenService.getNewToken()
    }
  }).then((movie) => movie.json()).then((movie) => movie)
}

export const getGenreString = async (genreArray) => {
  let genreString = '';
  for (let i = 0; i < genreArray.length; i += 1) {
    if (i === genreArray.length - 1) {
      genreString += `${genreArray[i].Name}`;
    } else {
      genreString += `${genreArray[i].Name} | `;
    }
  }
  return genreString;
}

export const getShowsByCinemaAndMovie = async (cinemaId, movieMongoId) => {
  const showTimes = []
  const movieInfo = await getMovieByMongoId(movieMongoId);
  for (let i = 0; i < movieInfo.length; i += 1) {
    const shows = movieInfo[i].showtimes;
    for (let j = 0; j < shows.length; j += 1) {
      if (shows[j].cinema.id === cinemaId) {
        showTimes.push(shows[j].schedule)
      }
    }
  }
  return showTimes;
}

export const getMoviesByCinemaId = async (cinemaId) => {
  const cinemaMovies = []
  const movies = await getAllMovies();
  for (let i = 0; i < movies.length; i += 1) {
    const shows = movies[i].showtimes;
    for (let j = 0; j < shows.length; j += 1) {
      if (shows[j].cinema.id === cinemaId) {
        movies[i].genreString = await getGenreString(movies[i].genres)
        cinemaMovies.push(movies[i])
      }
    }
  }
  return cinemaMovies;
}

export const ReleaseDate = 'release-DateIS'

function sortMovieByRelease(movieArray) {
  movieArray.sort((a,b) => {
    return a.title.localeCompare(b.title)
  })
}
