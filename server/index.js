const app = require("./src/app");
const { conn } = require("./src/DB_connection");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`estamos en el puerto ${port}`);
  await conn.sync({ force: false });
});
