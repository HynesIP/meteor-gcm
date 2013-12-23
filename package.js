Package.describe({
  summary: "Use Node-GCM package"
});

Npm.depends({'node-gcm':"0.9.6"});

Package.on_use(function (api) {
	api.use("meteor-gcm")
  api.add_files('lib.js', 'server');
});
