const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const logFile = path.join('/var/log/web', 'app.log');
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

app.use((req, res, next) => {
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    logStream.write(logEntry);
    console.log(logEntry);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
