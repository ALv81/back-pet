const { app } = require("./app");
const { DB } = require("./config/database");

const PORT = 4000


DB.authenticate()
.then(() => {
    console.log('Connect Database')
})
.catch((err) => {
 console.log('Error connect Database ' + err)
})

DB.sync({ force: false })
.then(() => {
    console.log('Base de datos sincronizada')
})
.catch((error) => {
    console.log("Error en la sincronizacion", error)
})

app.listen(PORT, () => {
    console.log('Server running Port 4000')
})