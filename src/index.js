const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Mock
const projects = [];

app.use(express.json());

app.get('/projects', (request, response) => response.json(projects));

app.post('/projects', (request, response) => {
  const { name, owner } = request.body;
  const project = {
    id: uuidv4(),
    name,
    owner,
  };

  projects.push(project);

  return response.status(201).json(project);
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
