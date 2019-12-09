import axios from 'axios';
const ENDPOINT = '??'

const cinemaService = () => {
    return {
        getAllCinemas: () => axios.get(ENDPOINT).then(res => {res.json()).then(res.data)});
    };
};

export default cinemaService();
