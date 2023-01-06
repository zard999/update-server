const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

app.use(serve(__dirname + '/update'));

app.listen(7890);

console.log('listening on port 7890');
