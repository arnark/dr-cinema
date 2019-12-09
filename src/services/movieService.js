const ENDPOINT = 'http://api.kvikmyndir.is/movies';

export const getAllMovies = async () => {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlMTcxOWQ2MDJkMDc3OTYyOTVhNWIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkFybmFyIEtqYXJ0YW5zc29uIiwiZW1haWwiOiJhcm5hcmsxOEBydS5pcyIsInVzZXJuYW1lIjoiYXJuYXJrIiwicGFzc3dvcmQiOiIkMmEkMDgkSFRhTXFRc1g2VlBVZzZ4SkgyWW83LnY1cjhwUlZmODBGeWN6M2MzaGxmVGRpUmhCLnV6S1MiLCJkb21haW4iOiJub25lIiwibWVzc2FnZSI6IlNjaG9vbCBwcm9qZWN0IC0gUmV5a2phdmlrIFVuaXZlcnNpdHkiLCJpYXQiOjE1NzU4ODQ3MDMsImV4cCI6MTU3NTk3MTEwM30.H7qis_S3Sh-BtnLHqkLQZOXtbo_wsW_HNw49ochTgLY'
    }
  }).then((movies) => movies.json()).then((movies) => movies)
}
