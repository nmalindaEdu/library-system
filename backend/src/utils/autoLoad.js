const fg = require('fast-glob');
const path = require('path');

exports.autoLoadRoutes = async (app) => {
  const routes = await fg('src/modules/**/*.routes.js');
  routes.forEach(async (route) => {
    console.log('Route', route);
    try {
      const router = await path.relative(__dirname, route.toString());
      console.log(router);
      //   router.default(app);
      app.use(router, (err, req, res, next) => {
        console.log(err);
        next();
      });

      console.log(`${route} - Loaded`);
    } catch (error) {
      console.log(`${route} loading error ${error}`);
    }
  });
};
