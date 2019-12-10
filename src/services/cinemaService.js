import * as tokenService from './tokenService';

const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

export const getAllCinemas = async () => {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': await tokenService.getNewToken()
    }
  }).then((cinemas) => cinemas.json()).then((cinemas) => cinemas)
}
