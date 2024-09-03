import { UserEntity } from "@/entities/users/user-entity";

export interface DTOFindOneByIdParams {
  id: number;
}
export interface DTOFindOneByIdReponse {
  data: UserEntity
}
