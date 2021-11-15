import StorageService from "./StorageService";

class JwtService {
    parseJwt(token) {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    getAccessToken() {
        const user = StorageService.getUser();
        return user ? user?.accessToken : null;
    }

    updateAccessToken(accessToken) {
        const user = StorageService.getUser();
        user.accessToken = accessToken;
        StorageService.setUser(user);
    }
}

export default new JwtService()