const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const root = path.join(__dirname + '/../dist/fileserver');

app.get('/', (req, res) => res.sendFile(`${root}/index.html`));
app.get(/^(.*)$/, (req, res) => res.sendFile(`${root}/${req.params[0]}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
