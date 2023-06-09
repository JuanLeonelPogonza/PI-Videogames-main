const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
    },
    released: {
        type: DataTypes.DATEONLY
    },
    rating: {
        type: DataTypes.DECIMAL
    },
  }, {timetamps: false});
};
