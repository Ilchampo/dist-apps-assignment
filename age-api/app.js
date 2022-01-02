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
app.set('port', process.env.AGE_PORT || 3030);

// Configures middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configures app routes
app.use('/api/age', require(path.join(__dirname, './routes/age.routes')));

// Listen app at port
app.listen(app.get('port'), () => {
	console.log('age api running at port', app.get('port'));
});
