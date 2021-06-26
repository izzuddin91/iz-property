//Install express server
const express = require('express');


const app = express();

// app.use(express.static('./package.json'));

// Serve only the static files form the dist directory
app.use(express.static('./dist/iz-property'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/iz-property/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);