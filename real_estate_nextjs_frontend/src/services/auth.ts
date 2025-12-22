import api from "../lib/axios";
import { RegisterPayload } from "../types/auth";
import { ApiResponse, LoginPayload, LoginResponse } from "../types/auth";
import { AxiosError } from "axios";

export const registerUser = async (
  payload: RegisterPayload
): Promise<ApiResponse<{ id: number; message: string }>> => {
  try {
    const res = await api.post<ApiResponse<{ id: number; message: string }>>(
      "/auth/register",
      payload
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const loginUser = async (
  payload: LoginPayload
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const res = await api.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      payload
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
    throw error;
  }
};
