import axios from "axios";
import authHeader from './AuthHeader';

const URL = 'http://localhost:8080/api/test/';

class UserService {

    getUserBoard() {
        return axios.get(URL + 'profile', { headers: authHeader() });
    }

}

export default new UserService()