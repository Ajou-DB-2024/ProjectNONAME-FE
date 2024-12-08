export const toString = (query: { [keys in string]: string | number }) => {
  let request_url = "?";

  for ( const [ key, value ] of Object.entries(query) ) {
    if (!value) continue;
    if ( typeof value === "string" && value.length == 0 ) continue;
    
    request_url += `${key}=${value}&`;
  }
  request_url = request_url.slice(0, -1);

  return request_url;
}