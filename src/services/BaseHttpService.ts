import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface BaseHttpProps {
  readonly baseURL?: string;
  readonly headers?: Record<string, string>;
}

export abstract class BaseHttpService {
  private readonly axiosClient: AxiosInstance;

  protected constructor({ baseURL = '', headers = {} }: BaseHttpProps) {
    this.axiosClient = axios.create({
      baseURL,
      responseType: 'json',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor() {
    this.axiosClient.interceptors.request.use(this.handleRequest);
  }

  // eslint-disable-next-line class-methods-use-this
  private async handleRequest(config: AxiosRequestConfig) {
    const configInstance = config;

    return configInstance;
  }

  protected get<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axiosClient.get<ResponseType>(url, config);
  }

  protected post<RequestType, ResponseType>(url: string, data?: RequestType, config?: AxiosRequestConfig) {
    return this.axiosClient.post<ResponseType>(url, data, config);
  }

  protected patch<RequestType, ResponseType>(url: string, data?: RequestType) {
    return this.axiosClient.patch<ResponseType>(url, data);
  }

  protected put<RequestData, ResponseType>(url: string, data?: RequestData) {
    return this.axiosClient.put<ResponseType>(url, data);
  }

  protected delete<ResponseType>(url: string) {
    return this.axiosClient.delete<ResponseType>(url);
  }
}
