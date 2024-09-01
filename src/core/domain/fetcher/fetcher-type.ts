

export interface IFetcher{
  baseURL: string
  config:  RequestInit
  get<T>(endpoint: string, params?: Record<string, string>): Promise<T>
  post<T>(endpoint: string, body: RequestInit['body']): Promise<T>
}