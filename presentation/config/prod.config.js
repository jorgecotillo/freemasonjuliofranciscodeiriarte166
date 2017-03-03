const SETTINGS = {
  authority: 'http://identity.provider.cotillo-corp.com/',
  client_id: 'js',
  redirect_uri: 'http://juliofranciscodeiriarte166.org/callback',
  post_logout_redirect_uri: 'http://juliofranciscodeiriarte166.org/home',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://juliofranciscodeiriarte166.org/home',
  //automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};

module.exports = SETTINGS;