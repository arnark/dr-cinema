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
  const movieInfo = await getMovieByMongoId(movieMongoId);

  for (let i = 0; i < movieInfo.length; i += 1) {
    console.log(movieInfo[i].showtimes)
  }
}
