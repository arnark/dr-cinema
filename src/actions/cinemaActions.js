import cinemaService from '../services/cinemaService';
import * as constants from '../constants';

export const getAllCinemas = () => {
  return async dispatch => {
      try {
          const allCinemas = await cinemaService.getAllCinemas();
          dispatch(getAllCinemasSuccess(allCinemas));
      } catch (err) {
          // TODO: Should dispatch an error action
      }
  };
}

const getAllCinemasSuccess = allCinemas => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas
});
