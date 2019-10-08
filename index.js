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

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
  .post('/users', async (ctx) => {
    // Custom body parser
    // let arr = [];
    //
    // await new Promise((resolve) => {
    //   ctx.req.on('data', (data) => {
    //     arr.push(data);
    //   });
    //
    //   ctx.req.on('end', () => {
    //     console.log(arr);
    //     console.log(JSON.parse(arr));
    //     ctx.body = JSON.parse(arr);
    //     resolve();
    //   })
    // })
    // end of custom body parser
    ctx.body = ctx.request.body;
    console.log(' ===>> ', ctx.body);
  });

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);


