const express = require("express");
const app = express();
const dbQueries = require("../src/dbQueries");
const path = require("path");
const compression = require("compression");
const spicedPg = require("spiced-pg");
const {DATABASE_URL} = require("../src/secrets.json");
const db = spicedPg(DATABASE_URL);
const DEFAULT_LIMIT = 20;

// function getImages() {
//   return db
//     .query(`SELECT * FROM images ORDER BY id DESC LIMIT $1`, [DEFAULT_LIMIT])
//     .then((results) => results.rows);
// }


app.use(express.json());
app.use(compression());
app.use(express.json());


app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));

// Projects
app.get("/api/images", async (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  const projects = await dbQueries.getImages();
  if (!projects) {
    response.statusCode = 400;
    response.json({
      message: "Error while fetching projects",
    });
    return;
  }
  response.json(projects);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 8081, function () {
  console.log("I'm listening.");
});
