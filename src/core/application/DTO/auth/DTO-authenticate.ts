import { EntityAuthenticate } from "@/entities/auth/authenticate-entity";


export interface DTOAuthenticateParams extends EntityAuthenticate{}
export interface DTOAuthenticateResponse {
  token:string
}