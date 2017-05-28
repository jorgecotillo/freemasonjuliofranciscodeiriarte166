const SETTINGS = {
  authority: 'https://identity.provider.cotillo-corp.com/',
  client_id: 'local-js',
  redirect_uri: 'http://localhost:4040/callback',
  post_logout_redirect_uri: 'http://localhost:4040/home',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://localhost:4040/home',
  //automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true,
  service_endpoint: 'http://services.juliofranciscodeiriarte166.org'//http://localhost:5001'
};

module.exports = SETTINGS;