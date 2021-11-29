import api from "./Api";

class UserService {
    getUserProfile(id) {
        return api.get('profile', { params: { id: id} });
    }

    getAdminBoard() {
        return api.get( 'admin');
    }

    deleteUser(id) {
        return api.delete(`admin/${id}`, {data: {id: id}})
    }

    addCard(cardData) {
        return api.post('profile', cardData )
    }

    getCardInfo(id) {
        return api.get('profile/card', { params: { id: id} });
    }

    addPayment(payData) {
        return api.post( 'payment', payData);
    }

    getAccountantInfo() {
        return api.get( 'account');
    }

}

export default new UserService()