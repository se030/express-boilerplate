import env from '#config/env.mjs';

export default (app) =>
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [env.client]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
