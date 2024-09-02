import { ListRenderItemInfo } from "react-native";
import PageControllerParams from "../pagination/page-controller-type";

export interface ListParamsMinAttInData {
  id: number;
}

export interface ListParams<data extends {id: number}>
  extends PageControllerParams {
  Header: React.FC;
  Body: ({index, item}:ListRenderItemInfo<data>)=> React.ReactNode;
  data?: data[];
  isFetching: Boolean;
}
