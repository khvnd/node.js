// Напишите HTTP сервер и реализуйте два обработчика, где:
// - По URL “/” будет возвращаться страница, на которой есть гиперссылка на
// вторую страницу по ссылке “/about”
// - А по URL “/about” будет возвращаться страница, на которой есть гиперссылка
// на первую страницу “/”
// - Также реализуйте обработку несуществующих роутов (404).
// - * На каждой странице реализуйте счетчик просмотров. Значение счетчика
// должно увеличиваться на единицу каждый раз, когда загружается страница
 
const http = require('http');


let homeViews = 0;
let aboutViews = 0;

const server = http.createServer((req, res) => {
   console.log('Запрос получен');
   if (req.url === '/') {
       homeViews++;

       res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'},);
       res.end(`<h1>Корневая страница</h1> <p>Просмотров этой страницы: ${homeViews}</p> <a href="/about">Ссылка на страницу about</a> `);
   } else if (req.url === '/about') {
       aboutViews++;

       res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'},);
       res.end(`<h1>Страница About</h1> <p>Просмотров этой страницы: ${aboutViews}</p> <a href="/">Ссылка на страницу </a>`);
   } else {
       res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'},);
       res.end('<h1> Страница не найдена!/<h1>');
   }
});

const port = 3000;

server.listen(port, () => {
   console.log(`Сервер запущен на порту ${port}`);
});