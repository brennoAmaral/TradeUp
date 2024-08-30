// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { DTOAuthenticateParams, DTOAuthenticateResponse } from "../../DTO/auth/DTO-authenticate";
// import { Router } from 'expo-router';

// class UseCaseAuthenticate{
//   constructor(
//     private readonly authenticate:(params:DTOAuthenticateParams)=>Promise<DTOAuthenticateResponse>,
//     private readonly navigate: Router['push']
//   ){}

//   async execute(params:DTOAuthenticateParams): Promise<void>{
//     const {token} = await this.authenticate(params)
//     await AsyncStorage.setItem("API_TOKEN", token)
//     this.navigate('home')
//   }
// }