export type BEAPIResponse<T = any> = {
  success: true,
  data: T,
  error?: string,
  message?: string
} | {
  success: false,
  error?: string,
  message?: string
}

export type FEServerResponse<T = any> = {
  result: true,
  statusCode: number,
  message?: string,
  data: BEAPIResponse<T>
} | {
  result: false,
  statusCode: number,
  message?: string
}