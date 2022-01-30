const express = require("express");
const app = express();
const dbQueries = require("../src/dbQueries");
const path = require("path");
const compression = require("compression");
const spicedPg = require("spiced-pg");
const { DATABASE_URL, PORT } = require("../src/secrets.json");
const db = spicedPg(DATABASE_URL);
const DEFAULT_LIMIT = 20;

// response.header("Access-Control-Allow-Origin", "*");

app.use(express.json());
app.use(compression());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", `*`);

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

// Images
app.get("/api/images", async (request, response) => {
  const images = await dbQueries.getImages();
  if (!images) {
    response.statusCode = 400;
    response.json({
      message: "Error while fetching images",
    });
    return;
  }
  response.json(images);
});

app.get("/api/images/top", async (request, response) => {
  const topImagesIds = await dbQueries.getMostVotedImages(5);
  if (!topImagesIds) {
    response.statusCode = 400;
    response.json({
      message: "Error while fetching top images",
    });
    return;
  }
  const topImages = await Promise.all(
    topImagesIds.map((topImageId) =>
      dbQueries.getImageById(topImageId.image_id)
    )
  );
  var mergedImages = [].concat.apply([], topImages);
  response.json(mergedImages);
});

// Votes

app.post("/api/vote", async (request, response) => {
  dbQueries
    .createVote(request.body)
    .then((result) =>
      response.json({ message: `Vote created with id: ${request.body.id}` })
    )
    .catch((error) => {
      throw new Error(error);
    });
});

app.delete("/api/vote/:image_id/:user_id", async (request, response) => {
  const { user_id, image_id } = request.params;
  dbQueries
    .deleteVote({ user_id, image_id });
  response.json({ message: `Vote Deleted with id: ${user_id}` });
});

// User

app.get("/api/user/:username", async (request, response) => {
  const { username } = request.params;
  dbQueries
    .getUserByUsername({ username })
    .then((result) => response.json({ result }))
    .catch((error) => console.log("failed to find user", error));
});

app.post("/api/user", async (request, response) => {
  dbQueries.createUser(request.body).then((result) => response.json(result));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(process.env.PORT || 8081, function () {
  console.log("I'm listening.");
});
