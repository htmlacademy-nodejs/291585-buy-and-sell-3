'use strict';

const {Router} = require(`express`);
const offersRouter = new Router();

offersRouter.get(`/:id`, (req, res) => res.render(`offers/ticket`));
offersRouter.get(`/category/:id`, (req, res) => res.render(`offers/category`));
offersRouter.get(`/add`, (req, res) => res.render(`offers/new-ticket`));
offersRouter.get(`/edit/:id`, (req, res) => res.render(`offers/ticket-edit`));

module.exports = offersRouter;
