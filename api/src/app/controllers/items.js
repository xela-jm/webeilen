const { matchedData } = require('express-validator')
const {Image} = require('../models')
const {Images} = require('../models')
const {images} = require('../models')

exports.getItems = async (req, res) => {
    //req = matchedData(req)
    const id = req.query.id;
    const color = req.query.color;
    const name = req.query.name;
    const price = req.query.price;
    const size = req.query.size;
    const description = req.query.description;

    let search = {};
    if (id != null) search.id = id;
    if (color != null) search.color = color;
    if (name != null) search.name = name;
    if (price != null) search.price = price;
    if (size != null) search.size = size;
    if (description != null) search.description = description;


    return Image.findAll({
        where: search
    })
}