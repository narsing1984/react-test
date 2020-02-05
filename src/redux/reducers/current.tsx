import {
  IAuthenticate,
  IUnauthenticate,
  GetGobalData,
  GetGobalDataError
} from "../../redux/actions/current";
import { AUTHENTICATE, UNAUTHENTICATE, GETGLOBALDATA } from "../constants";
import { ICurrent } from "../../types";

export default function currentReducer(
  state: ICurrent = {
    uuid: null,
    isAuthenticated: null,
    globalData: []
  },
  action: IAuthenticate | IUnauthenticate | GetGobalData | GetGobalDataError
): ICurrent {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, uuid: "placeholder-uuid", isAuthenticated: true };
    case UNAUTHENTICATE:
      return { ...state, uuid: null, isAuthenticated: false };
    case GETGLOBALDATA:
      return { ...state, globalData: action.data };
  }
  return state;
}
