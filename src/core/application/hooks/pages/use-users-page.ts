import tradeUpUseCases from "@/usecases/trade-up-use-cases";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useUsersPage() {
  const { users } = tradeUpUseCases;
  const [page, setPage] = useState<number>(1)
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => users.findAll({ page: page }),
  });
  const isFetchingOrError = !query.isFetching || !query.data?.data
  useEffect(()=>{
    query.refetch()
  },[page])
  return{
    query,
    setPage,
    isFetchingOrError
  }
}
