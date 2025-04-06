/**
 *  Starts the server, retrieves express from ./app.js as 'app'
 * 
 */
const app = require('./app');
const port = 3000;

app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello</h1>");
  
})

app.listen(port, (error) => {
  if(!error){
    console.log("Server is Successfully Running, and App is listening on port "+ port)
  }
  else{
    console.log("Server could not start", error);
  }
})