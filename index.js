// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = '3000';
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at host http://${hostname}:${port}`);
// });

// Frameworks: Express, Koa, Sailes (жесткая структура файлов), Action Hero

// const express = require('express');
// const app = express();
// const port = 3000;
//
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/test', (req, res) => res.send('Hello TEST!'));
//
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const greeting = require('./mod');
const initRoutes = require('./src/routes');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

initRoutes(router);

// router
//   .post('/users', async (ctx, next) => { // контроллер
//     // Custom body parser
//     // let arr = [];
//     //
//     // await new Promise((resolve) => {
//     //   ctx.req.on('data', (data) => {
//     //     arr.push(data);
//     //   });
//     //
//     //   ctx.req.on('end', () => {
//     //     console.log(arr);
//     //     console.log(JSON.parse(arr));
//     //     ctx.body = JSON.parse(arr);
//     //     resolve();
//     //   })
//     // })
//     // end of custom body parser
//     ctx.body = ctx.request.body;
//     ctx.body = greeting(ctx.request.body.name);
//     console.log(' ===>> ', ctx.body);
//     next();
//   })
//   .get('/', async (ctx) => {
//     ctx.body = 'HELLO WORLD!!!'
//   });

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async (ctx) => {
    const startTime = Date.now();
    const requestTime = Date.now() - startTime;
    console.log('requestTime', requestTime);
  });

process.stdin.resume();

process.on('SIGINT', () => {
  console.log('See you!');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Press Control-Z to exit.');
});

function handle(signal) {
  console.log(`Received ${signal}`);
}

// process.on('SIGINT', handle);
process.on('SIGTERM', handle);

app.listen(3000);
