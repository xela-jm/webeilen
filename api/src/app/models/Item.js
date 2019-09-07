'use strict';
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
    var Image1 = sequelize.define('Image', {
            id: {
                type: DataTypes.INTEGER,
                defaultValue: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            color: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING
            },
            size: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.INTEGER
            },
            link: {
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        })

    sequelizePaginate.paginate(Image1)

    return Image1;
}