import { IFetcher } from "./fetcher-type";

export default class Fetcher implements IFetcher {
  constructor(readonly baseURL: string, readonly config: RequestInit) {}

  async get<T>(endpoint: string, filters?: Record<string, string>): Promise<T> {
    const params = new URLSearchParams(filters);
    endpoint = `${this.baseURL}${endpoint}?${params}`
    const response = await fetch(endpoint, {
      ...this.config,
      method: "GET",
    }) 
    return await response.json() as T;
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    endpoint = `${this.baseURL}${endpoint}`;
    body = JSON.stringify(body)
    const response = await fetch(endpoint, {
      ...this.config,
      body,
      method: 'POST'
    })
    
    return await response.json() as T;
  }
}
