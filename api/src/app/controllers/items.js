const {matchedData} = require('express-validator')
const {Image} = require('../models')
const {Images} = require('../models')
const {images} = require('../models')

exports.getItems = async (req, res) => {
    //req = matchedData(req)
/*    const id = req.query.id;
    const color = req.query.color;
    const name = req.query.name;
    const price = req.query.price;
    const size = req.query.size;
    let page = req.query.page;*/

    const id = 0
    const color = 0;
    const name = '';
    const price = 0;
    const size = 0;
    let page = 1;

    const description = req.query.description;

    let search = {};
    /*if (id != null) search.id = id;
    if (color != null) search.color = color;
    if (name != null) search.name = name;
    if (price != null) search.price = price;
    if (size != null) search.size = size;
    if (description != null) search.description = description;*/
    page = (page != null) ? 1 : page;

    const limit = 12;

    const options = {
        //attributes: ['id', 'name'],
        page: page, // Default 1
        paginate: 12, // Default 25
        //order: [['name', 'DESC']],
        //where: { name: { [Op.like]: `%elliot%` } }
        where: search
    }
    const {docs, pages, total} = await Image.paginate(options)

    /*return Image.findAll({
        where: search
    })*/

    return {'items': docs, 'pages': pages, 'total': total}
}