const Koa = require('koa');
const app = new Koa();
import { Context } from 'koa';

app.use(async (ctx: Context) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// import books from './../mcmasteful-book-list.json';
// import { Context } from 'koa';
//
// export interface Book {
//     name: string,  