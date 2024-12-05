import axios from 'axios';
import { getTokenFromCookie } from '@/utils/cookieHelper'; // 쿠키 유틸리티 import

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_PROTOCOL}://${process.env.NEXT_PUBLIC_SERVER_HOST}${process.env.NEXT_PUBLIC_SERVER_API_BASIC_PATH}`, // .env 기반 설정
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
