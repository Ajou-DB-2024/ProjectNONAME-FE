/**
 * 토큰을 쿠키에 저장합니다.
 * @param {string} token - 쿠키에 저장할 토큰.
 */
export const setTokenInCookie = (token: string) => {
  const expires = new Date(Date.now() + 30 * 60 * 1000).toUTCString(); // 30분 후 만료
  document.cookie = `login_token=${token}; expires=${expires}; path=/; SameSite=Strict; Secure`;
};

/**
 * 쿠키에서 저장된 토큰을 가져옵니다.
 * @returns {string | null} 쿠키에서 가져온 토큰. 존재하지 않으면 null을 반환.
 */
export const getTokenFromCookie = (): string | null => {
  const match = document.cookie.match(/login_token=([^;]+)/);
  return match ? match[1] : null;
};

/**
 * 쿠키에서 저장된 토큰을 삭제합니다.
 */
export const deleteTokenCookie = () => {
  document.cookie = 'login_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
