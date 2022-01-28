const express = require("express");
const app = express();
// const { getImages } = "../src/db.js";
const path = require("path");
const compression = require("compression");

const spicedPg = require("spiced-pg");

const { DATABASE_URL } = require("../secrets");

const db = spicedPg(DATABASE_URL);
const DEFAULT_LIMIT = 20;

function getImages() {
  return db
    .query(`SELECT * FROM images ORDER BY id DESC LIMIT $1`, [DEFAULT_LIMIT])
    .then((results) => results.rows);
}

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
  console.log("dentro de server.js ruta /api/projects");
  console.log("getImages", getImages);
  console.log("DB URL", DATABASE_URL);
  const projects = await getImages();
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
