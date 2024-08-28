import * as SecureStore from "expo-secure-store";
import Fetcher from "../../domain/fetcher/fetcher";

export default function api() {
  let API = process.env.EXPO_PUBLIC_API_URL;
  let token = SecureStore!.getItem("API_TOKEN");

  if(!API){
    API = ''
  }
  if(!token){
    token = ''
  }

  return new Fetcher(API, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
