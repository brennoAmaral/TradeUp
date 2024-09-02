import { UserEntity } from "@/entities/users/user-entity";

export interface DTOFindAllUsersParams {
  page: number;
}
export interface DTOFindAllUsersReponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserEntity[]
}
