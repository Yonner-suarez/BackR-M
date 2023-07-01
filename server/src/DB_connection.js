require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const { userM, favoriteM } = require("./models/allModels");
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      // Más opciones de configuración de SSL/TLS aquí
    },
  },
});

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
userM(sequelize);
favoriteM(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
