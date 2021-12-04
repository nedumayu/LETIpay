import StorageService from "./StorageService";

class RoleService {
    hasRole(role) {
        return StorageService.getUser()?.roles.includes("ROLE_" + role)
    }
}

export default new RoleService;