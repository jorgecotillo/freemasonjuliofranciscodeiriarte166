const SETTINGS = {
  authority: 'http://localhost:5000/',
  client_id: 'local-js',
  redirect_uri: 'http://localhost:4040/callback',
  post_logout_redirect_uri: 'http://localhost:4040/home',
  response_type: 'id_token token',
  scope: 'openid profile email api1',

  silent_redirect_uri: 'http://localhost:4040/home',
  automaticSilentRenew: true,
  silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true,
  service_endpoint: 'http://services.juliofranciscodeiriarte166.org',
  content_url: 'http://wordpress.juliofranciscodeiriarte166.org/wp-login.php'
};

module.exports = SETTINGS;