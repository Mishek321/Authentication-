import sql from "mysql2";

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mishek111",
    database: "crud"
})

db.connect((err) => {
    if (err) return console.log(err);
    console.log("database connected")
})

export default db