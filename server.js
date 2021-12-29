const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express here');
});

app.use('/users/', require('./routes/usersRoutes'));

app.listen(3001, () => {
  console.log('running Express');
});
