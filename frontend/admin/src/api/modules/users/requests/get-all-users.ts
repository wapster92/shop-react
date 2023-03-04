import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export default (http: AxiosInstance, baseUrl: string) => ({
  getAllUsers(
    {signal}: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> {
    return http.get(`${baseUrl}/api/users`, {signal});
  }
})
