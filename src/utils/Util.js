export const copy = (origin) => Object.assign({}, origin);

export const  merge = (first, second) => Object.assign({}, first, second);


export const uniqueId  = () =>'_' + Math.random().toString(36).substr(2, 9);