import { DTOFindAllUsersParams, DTOFindAllUsersReponse } from "@/DTO/users/DTO-find-all-users";
import tradeUpRepository from "@/repositories/trade-up-repository";

export default async function useCaseTradeUpFindAllUsers(params: DTOFindAllUsersParams):Promise<DTOFindAllUsersReponse>{
  return await tradeUpRepository.findAllUsers(params);
}
