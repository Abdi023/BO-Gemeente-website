const express = require('express');
const ViewsController = require('../controllers/ViewsController');

const router = express.Router();

//  pagina
router.get('/',  ViewsController.MensenPagina)

router.get('/mensen/:slug', ViewsController.ViewMensenPagina)


// expertise 
router.get('/expertise', ViewsController.ExpertisenPagina);

router.get('/viewexpert/:slug', ViewsController.ViewExpertisenPagina);

// 
router.get('/projecten', ViewsController.ProjectenPagina);

// 
router.get('/project/:slug', ViewsController.ViewProjectenPagina);


// 
router.get('/publicaties', ViewsController.PublicatiesPagina);

// 
router.get('/viewpublicatie/:slug', ViewsController.ViewPublicPagina);




module.exports = router;