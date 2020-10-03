import axios from "axios";

const toUrl = (url) => `http://localhost:3000/api/${url}`;

export const $product = axios.create({ baseURL: toUrl("/product") });
export const $client = axios.create({ baseURL: toUrl("/client") });
export const $employee = axios.create({ baseURL: toUrl("/employee") });
export const $todo = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
}); // Example for test
