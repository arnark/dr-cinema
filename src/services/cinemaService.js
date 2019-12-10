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

export const getCinemaById = async (cinemaId) => {
  const allCinemas = await getAllCinemas();

  for (let i = 0; i < allCinemas.length; i += 1) {
    if (allCinemas[i].id === cinemaId) {
      return allCinemas[i];
    }
  }
}
