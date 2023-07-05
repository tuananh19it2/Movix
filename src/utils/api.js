import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTM3NGE0NmZlNjczZTdiYTE0NmVhNGJhNjE5ZDU3MyIsInN1YiI6IjY0YTU0MTJmMWJmMjY2MDEyNDFmZGRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Txu5kTzTuyILSE4LFJpYoBz0Og734FEBPVFAfnRV28';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
