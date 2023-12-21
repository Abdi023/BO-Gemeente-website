const catchAsync = require('../utils/catchAsync');
const Mensen = require('./../models/MensenModel');
const AppError = require('../utils/appError');

// main.pug = mainpagina
// exports.MainPagina = catchAsync(async (req, res, next) => {

//     res.status(200).render('main', {
//         title: 'Main Pagina',
        
//     });
// })

// mensen.pug = mensenpagina
exports.MensenPagina = catchAsync(async (req, res, next) =>{
    const mensens = await Mensen.find();

    res.status(200).render('mensen', {
        title: 'mensen Pagina',
        mensens
    });
})

// 
exports.ViewMensenPagina = catchAsync(async (req, res, next) => {
    const viewMensen = await Mensen.findOne({ slug: req.params.slug });
  
    if (!viewMensen) {
      return next(new AppError('Er is geen product met dit naam.', 404));
    }
  
    res.status(200).render('viewmensen', {
      title: `${viewMensen.name} ViewMensen`,
      viewMensen 
    });
});

// expertise.pug = ExpertisePagina
exports.ExpertisePagina = catchAsync(async (req, res, next) =>{

    res.status(200).render('expertise', {
        title: 'expertise Pagina',
    })
})

// projecten.pug = ProjectenPagina
exports.ProjectenPagina = catchAsync(async (req, res, next) =>{

    res.status(200).render('projecten', {
        title: 'projecten Pagina',
    })
})

// publicaties.pug = PublicatiesPagina
exports.PublicatiesPagina = catchAsync(async (req, res, next) =>{

    res.status(200).render('publicaties', {
        title: 'publicaties Pagina',
    })
})