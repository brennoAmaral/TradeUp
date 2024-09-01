import { apiTradeUp } from "@/apis/api-trade-up"
import { DTOAuthenticateParams, DTOAuthenticateResponse } from "@/DTO/auth/DTO-authenticate"

class tradeUpRepository {
  static async authenticate(params: DTOAuthenticateParams):Promise<DTOAuthenticateResponse>{
    return await apiTradeUp().post('login', params)
  }
}

export default  tradeUpRepository