import { EntityAuthenticate } from "../../../domain/entities/auth/authenticate-entity";
import IAuthenticateResponse from "../../../domain/http/auth/authenticate-type";


export interface DTOAuthenticateParams extends EntityAuthenticate{}
export interface DTOAuthenticateResponse extends IAuthenticateResponse{}