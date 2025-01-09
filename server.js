const express = require('express');
const app = express();



/* #1 Way

app.get('/', (req, res) => {
  res.send("Aaron Espinoza"); 
});

app.get('/alexandre', (req, res) => {
  res.send("Alexandre Espinoza");
});

*/

/* #2 Way
const lesson01Controller = require('./controllers/lesson01');  -> In the Top

app.get('/', lesson01Controller.aaronRoute)
app.get('/alexandre', lesson01Controller.alexandreRoute)

*/

const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
