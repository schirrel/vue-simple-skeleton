import Request from '@schirrel/request/Request.js';

export default class APIRequest {

    constructor(uri) {
        this.uri = uri;
    }

/**
 * @param {String} id
 * @returns {Function} Promise
 */
    get(id) {
        return Request.get(this.uri + '/' + id);
    }
/**
 * @returns {Function} Promise
 */
    all() {
        return Request.get(this.uri);  
    }
    /**
 * @param {Object} model
 * @returns {Function} Promise
 */

    save(model) {
        if (model.id) {
            return Request.put(this.uri+ '/' + id, {body: JSON.stringify(model) });
        }else 
        return Request.post(this.uri, {body: JSON.stringify(model) });
    }
    /**
     * 
     * @param {Object} params 
     * @returns Promise
     */
    pagination(params) {
        return Request.get(this.uri+'/pagination',params);
    }
    /**
     * 
     * @param {Object} params 
     * @returns Promise
     */
    search(params) {
        return Request.get(this.uri+'/search', params);
    }
}