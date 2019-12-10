import * as tokenService from './tokenService';

const ENDPOINT = 'http://api.kvikmyndir.is/movies';
const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming/'

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
