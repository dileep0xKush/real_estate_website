export interface RegisterPayload {
  userName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ApiResponse<T = unknown> {
  status: "success" | "error";
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  data: T;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
