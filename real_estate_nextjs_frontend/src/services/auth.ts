import api from "../lib/axios";
import type {
  RegisterPayload,
  LoginPayload,
  LoginResponse,
  ApiResponse,
} from "../types/auth";
import { AxiosError } from "axios";

/**
 * Register user
 */
export const registerUser = async (
  payload: RegisterPayload
): Promise<ApiResponse<{ id: number; message: string }>> => {
  try {
    const { data } = await api.post<
      ApiResponse<{ id: number; message: string }>
    >("/auth/register", payload);

    return data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

/**
 * Login user
 * Cookies (access_token, refresh_token) are set by backend
 */
export const loginUser = async (
  payload: LoginPayload
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const { data } = await api.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      payload
    );

    return data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

/**
 * Get current logged-in user (SERVER / CLIENT SAFE)
 * Uses httpOnly cookies
 */
export const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/auth/users");

    return data;
  } catch {
    return null;
  }
};

/* ---------------- helper ---------------- */

function handleAxiosError<T>(error: unknown): ApiResponse<T> {
  if (error instanceof AxiosError && error.response) {
    return error.response.data;
  }
  throw error;
}
