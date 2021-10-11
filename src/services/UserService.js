import axios from "axios";

class UserService {

    getUsers(){
        return axios.get('http://localhost:8080/main');
    }
}

export default new UserService()