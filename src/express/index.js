'use strict';

const express = require(`express`);
const path = require(`path`);

const mainRoutes = require(`./routes/main`);
const offersRoutes = require(`./routes/offers`);
const myRoutes = require(`./routes/my`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.use((req, res) => res.status(400).render(`errors/404`));
app.use((err, req, res) => res.status(500).render(`errors/500`));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT, () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
