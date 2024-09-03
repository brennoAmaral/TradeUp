import { apiTradeUp } from "@/apis/api-trade-up"
import { DTOAuthenticateParams, DTOAuthenticateResponse } from "@/DTO/auth/DTO-authenticate"
import { DTOFindAllUsersParams, DTOFindAllUsersReponse, } from "@/DTO/users/DTO-find-all-users"
import { DTOFindOneByIdParams, DTOFindOneByIdReponse } from "@/DTO/users/DTO-find-one-by-id"

class tradeUpRepository {
  static async authenticate(params: DTOAuthenticateParams):Promise<DTOAuthenticateResponse>{
    return await apiTradeUp().post('login', params)
  }
  static async findAllUsers(params: DTOFindAllUsersParams):Promise<DTOFindAllUsersReponse>{
    return await apiTradeUp().get('users', {'page': `${params.page}`})
  }
  static async findOneById({id}: DTOFindOneByIdParams):Promise<DTOFindOneByIdReponse>{
    return await apiTradeUp().get(`users/${id}`)
  }
}

export default  tradeUpRepository