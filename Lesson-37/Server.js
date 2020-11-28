const express = require('express');
const app = express();

app.use(express.static("public"));

app.listen(8081, function () {
console.log('ExpressJS is running on port 8081');
});