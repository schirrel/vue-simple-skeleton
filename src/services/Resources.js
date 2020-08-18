import APIRequest from '@schirrel/api-request/index';

const toUrl = url => `http://localhost:3000/api/${url}`;

export const $product = new APIRequest(toUrl('/product'));
export const $client = new APIRequest(toUrl('/client'));
export const $employee = new APIRequest(toUrl('/product'));
export const $todo = new APIRequest('https://jsonplaceholder.typicode.com/todos'); // Example for test