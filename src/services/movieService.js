import * as tokenService from './tokenService';

const ENDPOINT = 'http://api.kvikmyndir.is/movies';

export const getAllMovies = async () => {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': await tokenService.getNewToken()
    }
  }).then((movies) => movies.json()).then((movies) => movies)
}
