const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;
  console.log({ title, owner });

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  const { name, owner } = request.body;
  console.log({ name, owner });

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { name, owner } = request.body;
  console.log(id, name, owner);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => response.json([
  'Projeto 2',
  'Projeto 3',
]));

/**
 * Para que uma aplicação cliente possa acessar a aplicação que estamos criando,
 * precisamos disponibilizar um servidor e porta.
 * Recomendação é utilizar portas acima de 1024, pois de 0 a 1023 elas são portas reservadas para
 * serviços conhecidos.
 */
app.listen(PORT, () => console.log('🔥 Server running at http://localhost:3000'));
