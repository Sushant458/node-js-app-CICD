const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello everyone this is the deployement of the jekins with the webhook');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
