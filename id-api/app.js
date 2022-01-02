// Import required node modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Configures dotenv path
dotenv.config({ path: path.join(__dirname, '../.env') });

// Creates app
const app = express();

// Configures app
app.set('port', process.env.ID_PORT || 3333);

// Configures middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configures app routes
app.use('/api/id', require(path.join(__dirname, './routes/id.routes')));

// Listen app at port
app.listen(app.get('port'), () => {
	console.log('id api running at port', app.get('port'));
});
