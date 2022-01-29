const spicedPg = require("spiced-pg");
const fetch = require("node-fetch");
const {DATABASE_URL, DATABASE_NAME} = require("./src/secrets");

const db = spicedPg(
  `postgres:postgres:postgres@localhost:5432/${DATABASE_NAME}`
);

const dataURL = "https://picsum.photos/v2/list?page=2&limit=100";

// db.query('SELECT * FROM cities').then(function(results) {
//     console.log(results.rows);
// }).catch(function(err) {
//     console.log(err);
// });

async function getData(url) {
  return fetch(url).then((result) => result.json());
}

async function saveImage({ author, width, height, download_url }) {
  return db
    .query(
      "INSERT INTO images (author, width, height, download_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [author, width, height, download_url]
    )
    .then((result) => result.rows[0]);
}

(async function () {
  console.log(
    "DBBBBBB",
    `postgres:postgres:postgres@localhost:5432/${DATABASE_URL}`
  );
  const data = await getData(dataURL);
  // console.log('data', data);

  const image = await saveImage(data[0]);
  console.log('images', image);


  await Promise.all(data.map(saveImage));
  console.log("done");
})();
