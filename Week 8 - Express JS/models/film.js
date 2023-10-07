'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class film extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }

    film.init({
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        release_year: DataTypes.INTEGER,
        rate: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'film',
    });

    return film;
};