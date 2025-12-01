interface IHttpRequestOptions {
  params?: Record<string, string>;
}
export interface IHttpClient {
  get<T>(url: string, options?: IHttpRequestOptions): Promise<T>;
  post<T, B>(url: string, body: B, options?: IHttpRequestOptions): Promise<T>;
}