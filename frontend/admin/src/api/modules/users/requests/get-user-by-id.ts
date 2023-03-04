import {AxiosPromise} from "axios";
import {AxiosInstance, AxiosRequestConfig} from "axios/index";

export default (http: AxiosInstance, baseUrl: string) => ({
  getUserById(
    id: number | string,
    {signal}: AxiosRequestConfig = {},
  ): Promise<AxiosPromise> {
    return http.get(`${baseUrl}/api/users/${id}`, {signal})
  }
});
