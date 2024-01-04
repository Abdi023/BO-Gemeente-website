// models
const Mensen = require('./../models/MensenModel');
const Expertisen = require('./../models/ExpertiseModel');
const Projecten = require('./../models/ProjectenModel');
const Publicaties = require('./../models/PublicatiesModel');
// utils
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


// mensen.pug = mensenpagina
exports.MensenPagina = catchAsync(async (req, res, next) =>{
    const mensen = await Mensen.find();

    res.status(200).render('mensen', {
        title: 'Mensen Pagina',
        mensen
    });
});

exports.ViewMensenPagina = catchAsync(async (req, res, next) =>{
    const mens = await Mensen.findOne({ slug: req.params.slug });

    if (!mens) {
        return next(new AppError('Er is geen product met dit naam.', 404));
    }

    res.status(200).render('viewmens', {
        title: `${mens.name}`,
        mens
    });
});


// expertise
exports.ExpertisenPagina = catchAsync(async (req, res, next) =>{
    const expertisen = await Expertisen.find();

    res.status(200).render('expertise', {
        title: 'Expertisen Pagina',
        expertisen
    });
});


exports.ViewExpertisenPagina = catchAsync(async (req, res, next) =>{
    const expert = await Expertisen.findOne({ slug: req.params.slug });

    if (!expert) {
        return next(new AppError('Er is geen product met dit naam.', 404));
    }

    res.status(200).render('viewexpert', {
        title: `${expert.name}`,
        expert
    });
});



// projecten.pug = ProjectenPagina
exports.ProjectenPagina = catchAsync(async (req, res, next) =>{
    const projecten = await Projecten.find();

    res.status(200).render('projecten', {
        title: 'projecten Pagina',
        projecten
    });
});

exports.ViewProjectenPagina = catchAsync(async (req, res, next) =>{
    const project = await Projecten.findOne({ slug: req.params.slug });

    if (!project) {
        return next(new AppError('Er is geen product met dit naam.', 404));
    }

    res.status(200).render('viewproject', {
        title: `${project.name}`,
        project
    });
});

// publicaties.pug = PublicatiesPagina
exports.PublicatiesPagina = catchAsync(async (req, res, next) =>{
    const publicaties = await Publicaties.find();

    res.status(200).render('publicaties', {
        title: 'publicaties Pagina',
        publicaties
    });
});

exports.ViewPublicPagina = catchAsync(async (req, res, next) =>{
    const publicatie = await Publicaties.findOne({ slug: req.params.slug });

    if (!publicatie) {
        return next(new AppError('Er is geen product met dit naam.', 404));
    }

    res.status(200).render('viewpublicatie', {
        title: `${publicatie.name}`,
        publicatie
    });
});

