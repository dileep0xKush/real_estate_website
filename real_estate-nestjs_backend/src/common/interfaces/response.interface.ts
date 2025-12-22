export interface Response<T> {
  status: string;
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  data: T;
}

export interface ResponseWithIdAndMessage {
  id: number | number[];
  message: string;
}
