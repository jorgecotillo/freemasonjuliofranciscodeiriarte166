const SETTINGS = {
  authority: 'http://localhost:5000/',
  client_id: 'js',
  redirect_uri: 'http://localhost:4040/callback',
  post_logout_redirect_uri: 'http://localhost:4040/home',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://localhost:4040/home',
  //automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};

module.exports = SETTINGS;