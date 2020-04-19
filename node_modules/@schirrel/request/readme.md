# Request
A simple promisse based and single file wrapper for new comers start to use Fetch API.

## Installing

Just import the `Request.js` file or run `npm i @schirrel/request`.

## Examples

See [Example Folder](https://github.com/schirrel/request/tree/master/Example)

#### GET

```javascript
Request.get("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => {})
.catch((err) => {});

```
#### POST
```javascript
Request.post('https://jsonplaceholder.typipre.com/posts', {
    body: {
        title:'Ahoy'
    }
})
.then((res) => {})
.catch((err) => {});

```
#### PUT
```javascript
Request.put('https://jsonplaceholder.typicode.com/posts/1', {
body: {
   id:1,
   title:'Ahoy'
    }
 })
.then((res) => {})
.catch((err) => {});

```
#### DELETE
```javascript
Request.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {})
.catch((err) => {});

```