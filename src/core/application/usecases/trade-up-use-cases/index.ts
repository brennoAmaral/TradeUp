import useCaseTradeUpAuthenticate from "./auth/authenticate-use-case";
import useCaseTradeUpSignout from "./auth/sign-out-use-case";
import useCaseTradeUpFindAllUsers from "./users/find-all-users-use-case";


const tradeUpUseCases = {
  authenticate: useCaseTradeUpAuthenticate,
  signout: useCaseTradeUpSignout,
  users: {
    findAll: useCaseTradeUpFindAllUsers
  }
}

export default tradeUpUseCases