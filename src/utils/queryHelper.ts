export const toString = (query: { [keys in string]: string }) => {
  let request_url = "?";

  for ( const [ key, value ] of Object.entries(query) ) {
    request_url += `${key}=${value}&`;
  }
  request_url = request_url.slice(0, -1);

  return request_url;
}