import bodyparser from "body-parser";
import express from "express";
import { dirname } from "path";
import pg from "pg";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "secrets",
    password: "Anirban@123",
    port: 5432,
  });
  db.connect();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
    
app.post("/submit", async(req, res) => {
    const state = req.body["state"];
    const district = req.body["district"];

    const result = await db.query("SELECT soil_type FROM soil_wb WHERE stat=$1 and district=$2",[state,district]);
    let soil = [];
    console.log(result.rows);
    result.rows.forEach((type) => {
        soil.push(type.soil_type);
    });

    res.render("index.ejs",{soil:soil});
});

app.listen(port,()=>{
    console.log(`Server running at port localhost:${port}`);
});