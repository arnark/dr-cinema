import * as movieService from '../services/movieService';
import * as constants from '../constants';

export const getAllMovies = async () => {
  return async (dispatch) => {
    try {
      console.log('here');
      const allMovies = await movieService.getAllMovies();
      console.log('alllllll movvi ' + allMovies);
      dispatch(getAllMoviesSuccess(allMovies));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
}

const getAllMoviesSuccess = (allMovies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: allMovies
});
