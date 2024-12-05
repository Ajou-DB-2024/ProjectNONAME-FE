import { NextRequest, NextResponse } from 'next/server';
import axiosInstance from '@/api/connection'; // Axios 인스턴스 import

/**
 * [ROUTE] GET /api/login/authenticate
 * 
 * GCP 로그인 응답을 forwarding합니다
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const scope = searchParams.get('scope');

  if (!code || !scope) {
    return NextResponse.json({ message: 'Missing code or scope' }, { status: 400 });
  }

  try {
    // BE 서버로 요청을 포워딩
    const api_response = await axiosInstance.get('/login/redirect', {
      params: { code, scope },
    });

    const body = api_response.data; // 요청 본문에서 데이터를 파싱
    const token = body.data?.logined_token;
    const member_info = body.data?.logined_member;
  
    if (!token) {
      return NextResponse.json({
        result: false,
        message: 'Token is required'
      }, { status: 400 });
    }
  
    // HTTP-only 쿠키 설정
    const fe_server_response = NextResponse.json({ 
      result: true,
      data: member_info,
      message: 'Login successful'
    });

    fe_server_response.cookies.set('login_token', token, {
      httpOnly: true, // JavaScript 접근 금지
      secure: process.env.NODE_ENV === 'production', // HTTPS 사용
      sameSite: 'strict', // CSRF 방지
      path: '/', // 모든 경로에서 쿠키 접근 가능
      maxAge: 30 * 60, // 30분 동안 유효
    });
  
    return fe_server_response;
  } catch (error: any) {
    console.error('[[ROUTE] GET /api/authenticate] Error forwarding request:', error.message);

    return NextResponse.json(
      {
        message: 'Error forwarding request',
        error: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
