import api from "@/core/application/repositories/api";
import ILoginResponse from "./login-type";

export default async function login(params:IAuthenticateEntity):Promise<ILoginResponse>{
  return await api().post('login', params)
} 