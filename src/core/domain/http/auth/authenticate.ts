import api from "../../../application/repositories/api";
import { EntityAuthenticate } from "../../entities/auth/authenticate-entity";
import ILoginResponse from "./authenticate-type";

export default async function login(params:EntityAuthenticate):Promise<ILoginResponse>{
  return await api().post('login', params)
} 