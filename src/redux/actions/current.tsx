import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constants from "../constants";

export interface IAuthenticate {
  type: constants.AUTHENTICATE;
}

function authenticate(): IAuthenticate {
  return {
    type: constants.AUTHENTICATE
  };
}

export interface IUnauthenticate {
  type: constants.UNAUTHENTICATE;
}

function unauthenticate(): IUnauthenticate {
  return {
    type: constants.UNAUTHENTICATE
  };
}

export interface GetGobalData {
  type: constants.GETGLOBALDATA;
  data: [];
}

function getglobaldata(data: any): GetGobalData {
  return {
    type: constants.GETGLOBALDATA,
    data
  };
}

export interface GetGobalDataError {
  type: constants.GETGLOBALDATAERROR;
}

function getglobaldataerror(error: string): GetGobalDataError {
  return {
    type: constants.GETGLOBALDATAERROR
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;
export type GlobalDataAction = GetGobalData;

export function logIn() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "true");
    dispatch(authenticate());
  };
}

export function logOut() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "false");
    dispatch(unauthenticate());
  };
}

export function globaldata() {
  return async (dispatch: Dispatch<GlobalDataAction, {}, any>) => {
    fetch("https://resct-test.azurewebsites.net/settings/get")
      .then(res => res.json())
      .then(res => {
        dispatch(getglobaldata(res));
      })
      .catch(error => {
        dispatch(getglobaldataerror(error));
      });
  };
}

export function checkAuthentication() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ? JSON.parse(auth) : null;

    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
  };
}
