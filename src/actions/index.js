import axios from 'axios';

const aq_API_KEY = '70d8efad38844b4d5582432b51abd6e1bf419a20';
const aq_ROOT_URL = 'https://api.waqi.info/feed';

export const FETCH_DUST = 'FETCH_DUST';
// export const DEDUPLICATION = 'DEDUPLICATION';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export function fetchDust(city) {
    const url = `${aq_ROOT_URL}/${city}/?token=${aq_API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_DUST,
        payload: request
    };
}

export function selectLocation(city){
    console.log(city)
    const lat = city.data.city.geo[0];
    const lng = city.data.city.geo[1];
    const url = `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aq_API_KEY}`;
    const request = axios.get(url);
    return {
        type: SELECT_LOCATION,
        payload: request
    };
}
