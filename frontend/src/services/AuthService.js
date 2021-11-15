import api from "./Api";
import StorageService from "./StorageService";

class AuthService {
    login(userData) {
        return api.post('auth/signin', userData)
            .then(response => {
                if (response.data.accessToken) {
                    StorageService.setUser(response.data);
                } return response.data;
            });
    }

    logout() {
        const userId = StorageService.getId();
        api.post('auth/logout', {userId: userId})
            .then(response => {
                console.log(response)
                StorageService.remove();
            })
            .catch(error =>{
                console.error(error)
                StorageService.remove();
            })
        window.location.reload();
    }

    register(userData) {
        return api.post('auth/signup', userData);
    }
}

export default new AuthService();
