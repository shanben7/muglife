const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const Helmet = require('koa-helmet');
const respond = require('koa-respond');
const mongoose = require('mongoose');
const Utils = require('./utils');

const app = new Koa();
const router = new Router();

app.use(Helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors());
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}));

app.use(respond());

// API routes
require('./routes')(router);
app.use(router.routes());
app.use(require('koa-static')('./build'));
app.use(router.allowedMethods());

const user = Utils.fromEnv('MUGLIFE_USER') || "shanben7";
const password = Utils.fromEnv('MUGLIFE_PASSWORD') || "jamAAl89";
const database = `mongodb://${user}:${password}@ds133621.mlab.com:33621/muglife`;
mongoose.connect(database);

module.exports = app;
