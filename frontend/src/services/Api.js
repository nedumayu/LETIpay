import axios from 'axios';
import JwtService from "./JwtService";
import StorageService from "./StorageService";

const instance = axios.create({
    baseURL: "http://localhost:8080/api"
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = JwtService.getAccessToken();
        if (accessToken) {
            config.headers["Authorization"] = 'Bearer ' + accessToken;
        } return config;
    }, error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    }, async error => {
        const config = error.config;
        if ((config.url !== "auth/signin" || config.url !== "auth/logout") && error.response) {
            if (error.response.status === 401 && !config._retry) {
                config._retry = true;
                try {
                    instance.post("/auth/refreshtoken", {
                        refreshToken: JwtService.getRefreshToken()
                    }).then(response => {
                            const {accessToken} = response.data;
                            JwtService.updateAccessToken(accessToken);
                        }).catch((_error) => {
                            console.error(_error);
                            if (_error.response.status === 403 ) {
                                StorageService.remove();
                                window.location.reload();
                            }
                        });
                    return instance(config);
                } catch (err) {
                    return Promise.reject(err);
                }
            } return Promise.reject(error);
        }
    }
);

export default instance;