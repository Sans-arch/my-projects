const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (request, response) => response.json({
  message: 'Olá Dev! Bem vindo ao curso!',
}));

/**
 * Para que uma aplicação cliente possa acessar a aplicação que estamos criando,
 * precisamos disponibilizar um servidor e porta.
 * Recomendação é utilizar portas acima de 1024, pois de 0 a 1023 elas são portas reservadas para
 * serviços conhecidos.
 */
app.listen(PORT, () => console.log('🔥 Server running at http://localhost:3000'));
