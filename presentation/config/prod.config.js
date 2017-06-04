const SETTINGS = {
  authority: 'https://identity.provider.cotillo-corp.com/',
  client_id: 'js',
  redirect_uri: 'http://juliofranciscodeiriarte166.org/callback',
  post_logout_redirect_uri: 'http://juliofranciscodeiriarte166.org/home',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://juliofranciscodeiriarte166.org/home',
  automaticSilentRenew: true,
  silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true,
  service_endpoint: 'http://services.juliofranciscodeiriarte166.org',
  content_url: 'http://wordpress.juluofranciscodeiriarte166.org/wp-login.php'
};

module.exports = SETTINGS;