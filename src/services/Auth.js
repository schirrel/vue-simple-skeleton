import Storage from '@/services/Storage';
import Request from '@/services/ApiRequest';

export default class Auth {

/**
 * @param {String} value
 * @returns {Function} Promise
 */
static register(value) {
  return Storage.set('storedToken',value);
}
/**
 * @returns {Promise} Promise
 */
static unregister() {
  return  Storage.clear('storedToken');
}
/**
 * @param {Object} credentials
 * @param {Function} success
 */
  static login(credentials, success) {
    return this.loginFake(credentials, success);
  /*
  return Request
    .post('/auth/login', { body: credentials })
    .then((response) =>{
      this.register(response.token).then((success))
    });*/
}

static loginFake(credentials, success) {

  this.register(Math.random().toString(36));
  success && success();
  
  
}

/**
 * @param {Function} success
 */
static logout(success) {
  return this.logoutFake(success);
  /*return this.unregister()
    .then(() => {
      Request.post('/auth/logout').then(success)
    })*/
}

  
static logoutFake(success) {

  this.unregister();
  success && success();
  
  
}
  
}
