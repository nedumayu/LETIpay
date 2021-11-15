import api from "./Api";

class UserService {
    getUserProfile(id) {
        return api.get('profile', { params: { id: id} });
    }

    getAdminBoard() {
        return api.get( 'test/admin');
    }
}

export default new UserService()