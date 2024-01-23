import { commonAPI } from "./commonAPI"
import { server_url } from "./serverUrl"

// register
export const registerAPI = async (user) => {
    return await commonAPI("POST",`${server_url}/user/register`,user)
}

// login
export const loginAPI = async (user) => {
    return await commonAPI("POST",`${server_url}/user/login`,user)
}
