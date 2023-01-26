const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Mock
const projects = [];

// Criando um middleware, função que intercepta a request antes de ela entrar no handler de uma rota
function logRoutes(request, response, next) {
  const { method, url } = request;
  const route = `[${method.toUpperCase()}] ${url}`;
  console.log(route);
  return next();
}

app.use(express.json());

// Middleware - será utilizado para todas as rotas
// app.use(logRoutes);

app.get('/projects', (request, response) => response.json(projects));

// Executando um middleware `logRoutes` antes de entrar no handler da rota
app.post('/projects', logRoutes, (request, response) => {
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

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: 'Project not found!' });
  }

  if (!name || !owner) {
    return response.status(400).json({ error: 'Name and Owner are required!' });
  }

  projects[projectIndex] = {
    ...projects[projectIndex],
    name,
    owner,
  };

  return response.json(projects[projectIndex]);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: 'Project not found!' });
  }

  projects.splice(projectIndex, 1);

  return response.sendStatus(204);
});

/**
 * Para que uma aplicação cliente possa acessar a aplicação que estamos criando,
 * precisamos disponibilizar um servidor e porta.
 * Recomendação é utilizar portas acima de 1024, pois de 0 a 1023 elas são portas reservadas para
 * serviços conhecidos.
 */
app.listen(PORT, () => console.log('🔥 Server running at http://localhost:3000'));
