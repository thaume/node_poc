/*###############################################
# 
# GET configs
#
###############################################*/

module.exports = function (app, express, path) {

    require('./development')(app);
    require('./production')(app);
		require('./hbs_config')();

    app.configure(function(){
		app.set('port', process.env.PORT || 3000);
		app.set('views', 'app/view');
		app.set('view engine', 'hbs');
		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));
		app.use(express.session());
		app.use(app.router);
		app.use(express.static(path.join(__dirname, '../public')));
		app.locals.pretty = true;

	});
};