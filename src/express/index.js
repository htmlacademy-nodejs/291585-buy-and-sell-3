'use strict';

const express = require(`express`);
const mainRoutes = require(`./routes/main`);
const offersRoutes = require(`./routes/offers`);
const myRoutes = require(`./routes/my`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);

app.listen(DEFAULT_PORT, () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
