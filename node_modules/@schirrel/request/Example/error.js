import Request from "../Request.js";


/* GET */
Request.get("https://jsonplaceholder.typicode.com/todos/1123123123")
  .then((res) => {
    console.info("GET - This is a success response", res);
  })
  .catch((err) => {
    console.log("GET - This is an error response", err);
  });

  /* POST */
Request.post('https://jsonplaceholder.typicode.com/user', {
    body: {
        title:'Ahoy'
    }
})
.then((res) => {
  console.info("POST - This is a success response", res);
})
.catch((err) => {
  console.log("POST - This is an error response", err);
});

/* PUT */
Request.put('https://jsonplaceholder.typicode.com/user/1', {
    body: {
        title:'Ahoy'
    }
})
.then((res) => {
  console.info("PUT - This is a success response", res);
})
.catch((err) => {
  console.log("PUT - This is an error response", err);
});


/* DELETE */
Request.delete('https://jsonplaceholder.typicode.com/user/1')
.then((res) => {
  console.info("DELETE - This is a success response", res);
})
.catch((err) => {
  console.log("DELETE - This is an error response", err);
});
