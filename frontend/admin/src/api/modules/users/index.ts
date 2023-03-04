import {AxiosInstance} from "axios";
import getAllUsers from "./requests/get-all-users";
import getUserById from "./requests/get-user-by-id";

export type UserRequests = ReturnType<typeof getAllUsers> | ReturnType<typeof getUserById>
export default (http: AxiosInstance, baseUrl: string) => ({
  ...getAllUsers(http, baseUrl),
  ...getUserById(http, baseUrl),
})
