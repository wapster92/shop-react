import {AxiosInstance} from "axios";
import users from './modules/users'


export default (http: AxiosInstance, baseUrl: string) => {
  return {
    ...users(http, baseUrl),
  };
}
