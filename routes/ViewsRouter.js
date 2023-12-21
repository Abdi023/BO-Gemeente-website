const express = require('express');
const ViewsController = require('../controllers/ViewsController');

const router = express.Router();

// home pagina
router.get('/',  ViewsController.MensenPagina)

// mensen pagina
router
    .get('/mensen', ViewsController.MensenPagina);
router
    // .get('/mensen/:slug', ViewsController.ViewMensenPagina);

// expertise 
router
    .get('/expertise', ViewsController.ExpertisePagina);
router
    .get('/projecten', ViewsController.ProjectenPagina);
router
    .get('/publicaties', ViewsController.PublicatiesPagina);


module.exports = router;