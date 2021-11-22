import api from "./Api";

class UserService {
    getUserProfile(id) {
        return api.get('profile', { params: { id: id} });
    }

    getAdminBoard() {
        return api.get( 'test/admin');
    }

    deleteUser(id) {
        return api.delete(`test/admin/${id}`, {data: {id: id}})
    }

    addCard(cardData) {
        return api.post('profile', cardData )
    }

    getCardInfo(id) {
        return api.get('profile/card', { params: { id: id} });
    }


}

export default new UserService()