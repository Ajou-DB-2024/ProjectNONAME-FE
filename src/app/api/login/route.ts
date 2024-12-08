import { NextResponse } from 'next/server';
import axiosInstance from '@/api/connection'; // Axios 인스턴스 import

/**
 * [ROUTE] GET /api/login
 * 
 * 로그인 요청을 forwarding합니다
 */
export async function GET() {
  
  try {
    // BE 서버로 요청을 포워딩
    const api_response = await axiosInstance.get('/member/login');

    const body = api_response.data; // 요청 본문에서 데이터를 파싱
    const login_redirect_url = body.data?.url;
  
    if (!login_redirect_url) {
      return NextResponse.json({ message: 'Login Failed' }, { status: 400 });
    }

    return NextResponse.redirect(login_redirect_url, 302);
  } catch (error: any) {
    console.error('[[ROUTE] GET /api/login] Error request handling:', error.message);

    console.log(error)

    return NextResponse.json(
      {
        message: 'Error request handling',
        error: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}