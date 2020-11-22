const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('hi AWS how are you doing?!'));
=======
app.get('/', (req, res) => res.send('Hello AWS!'));
>>>>>>> 15c86a42cc077b777cb3a68a5a4891212d9f379b

app.listen(port);
console.log(`App running on http://localhost:${port}`);
