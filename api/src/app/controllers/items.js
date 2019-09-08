const {matchedData} = require('express-validator')
const {Image} = require('../models')
const {Images} = require('../models')
const {images} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const paginate = 12

exports.getItems = async (req, res) => {
    //req = matchedData(req) //TODO: use matchedData
    let colors = null;
    let sizes = null;
    let page = 1;
    let offset = 0;
    if (req.body.colors && req.body.colors.length > 0) {
       colors = req.body.colors;
    }
    if (req.body.sizes && req.body.sizes.length > 0) {
        sizes = req.body.sizes;
    }

    if (req.body.offset) {
        offset = req.body.offset
        page = req.body.offset/12 + 1;
    }

    let search = {}
    if (colors != null) search.color = {[Op.in]: colors};
    if (sizes != null) search.size = {[Op.in]: sizes};

    const options = {
        page: page,
        paginate: paginate,
        where: search
    }

    const {docs, pages, total} = await Image.paginate(options)
    if (offset > total) {
        offset = 0;
    }

    return {'items': docs, 'pages': pages, 'total': total, 'offset': offset}
}