const path = require('path');
const ejs = require('ejs');


module.exports = function (app) {

	// --- index ---
	app.get("/", (request, response) => {
		console.log(`[${request?.method}] ${request.url} - ${response?.statusCode}`);

		response.status(200);
		response.send({
			method: request?.method,
			url: request?.baseUrl,
			statusCode: response?.statusCode,
		});
	});


	app.get('/home', (request, response) => {
		//app.use(express.static(path.join(__dirname, '..', 'frontend')));
		app.set('views', path.join(__dirname, '..', '..', 'frontend'));
		app.engine('html', ejs.renderFile);
		app.set('view engine', 'html');

		console.log(`[${request?.method}] ${request.url} - ${response?.statusCode}`);

		response.status(200);
		response.render('index.html');
	});
}
