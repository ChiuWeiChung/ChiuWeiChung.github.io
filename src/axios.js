import {url} from './dbURL';
import axios from 'axios';


const instance = axios.create({
    baseURL: url
})

export default instance