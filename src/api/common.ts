"use server";

import { cookies } from "next/headers";
import axiosInstance from "./connection";

import * as queryUtil from "@/utils/queryHelper";
import { FEServerResponse } from "./type";

export const getLoginToken = async () => {
  const cookieStore = await cookies();
  const logined_token = cookieStore.get("login_token");

  return logined_token?.value;
}

export const requestGetAPI = async <T>(
  url: string,
  query?: { [keys in string]: string | number }
): Promise<FEServerResponse<T>> => {
  try {
    const logined_token = await getLoginToken();
    let request_url = url;
    if (query) request_url += queryUtil.toString(query);

    console.log(request_url);
    const response = await axiosInstance.get(request_url, { 
      headers: {
        Authorization: `Bearer ${logined_token}`
      }
    });
    console.log(response);
    return {
      result: true, statusCode: response.status,
      data: response.data
    } as FEServerResponse<T>;
  } catch (error: any) {
    return {
      result: false, statusCode: error?.status,
      message: error?.message
    } as FEServerResponse<T>;
  }
}

export const requestPostAPI = async <T>(
  url: string,
  body: { [keys in string]: string | number } = {},
  query?: { [keys in string]: string | number }
): Promise<FEServerResponse<T>> => {
  try {
    const logined_token = await getLoginToken();
    let request_url = url;
    if (query) request_url += queryUtil.toString(query);

    const response = await axiosInstance.post(request_url, body, { 
      headers: {
        Authorization: `Bearer ${logined_token}`
      }
    });
    return {
      result: true, statusCode: response.status,
      data: response.data
    } as FEServerResponse<T>;
  } catch (error: any) {
    return {
      result: false, statusCode: error?.status,
      message: error?.message
    } as FEServerResponse<T>;
  }
}