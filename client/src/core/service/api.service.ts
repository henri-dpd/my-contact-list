import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { DEFAULT_HEADERS } from '.';
import { ResponseError } from '../types/service';

class ApiService {
  protected axios: Axios;
  private readonly apiURL = import.meta.env.VITE_APP_API_URL;

  constructor(url: string) {
    this.axios = axios.create({
      baseURL: `${this.apiURL}/${url}`,
      headers: DEFAULT_HEADERS,
    });
  }

  onSuccess = <T>(response: AxiosResponse<T>): Promise<T> =>
    Promise.resolve(response.data);

  onError = (error: AxiosError): Promise<never> => {
    return Promise.reject(new ResponseError(error.message));
  };

  get = <U>(resource: string, config?: AxiosRequestConfig) =>
    this.axios
      ?.get<U>(`${resource}`, config)
      .then(this.onSuccess)
      .catch(this.onError);

  post = <U>(resource: string, body: unknown, config?: AxiosRequestConfig) =>
    this.axios
      .post<U>(`${resource}`, body, config)
      .then(this.onSuccess)
      .catch(this.onError);

  patch = <U>(resource: string, body: unknown, config?: AxiosRequestConfig) =>
    this.axios
      .patch<U>(`${resource}`, body, config)
      .then(this.onSuccess)
      .catch(this.onError);

  put = (resource: string, body: Record<string, unknown>) =>
    this.axios
      .put(`${resource}`, body)
      .then(this.onSuccess)
      .catch(this.onError);

  delete = (resource: string) =>
    this.axios.delete(resource).then(this.onSuccess).catch(this.onError);
}

export default ApiService;
