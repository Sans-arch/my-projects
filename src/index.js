const express = require('express');

const app = express();
const PORT = 3000;

// GET http://localhost:3000/projects?title=Node&owner=Aluizio&page=1
// GET http://localhost:3000/projects?page=1&limit=15

app.get('/projects', (request, response) => {
  const { title, owner, page } = request.query;
  console.log({ title, owner, page });

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.put('/projects/:id/:name', (request, response) => {
  const { id, name } = request.params;
  console.log(id, name);

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
