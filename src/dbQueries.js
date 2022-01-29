const spicedPg = require("spiced-pg");

const {DATABASE_URL} = require("./secrets.json");

const db = spicedPg(DATABASE_URL);
const DEFAULT_LIMIT = 5;

function getImages() {
  return db
    .query(`SELECT * FROM images ORDER BY id DESC LIMIT $1`, [DEFAULT_LIMIT])
    .then((results) => results.rows);
}

function getMostVotedImages(LIMIT) {
  return db
    .query(`SELECT votes.image_id, COUNT(votes.id) FROM votes GROUP BY votes.image_id LIMIT $1;`, [LIMIT])
    .then((results) => results.rows);
}

function getImageById(image_id) {
  return db
    .query(`SELECT * FROM images WHERE id = $1`, [image_id])
    .then((results) => results.rows);
}

function createVote({ user_id, image_id }) {
  return db
    .query(
      `INSERT INTO votes (user_id, image_id) VALUES ($1, $2) returning *`,
      [user_id, image_id]
    )
    .then((result) => result.rows[0]);
}

function deleteVote({ user_id, image_id }) {
  console.log('dentro de DELETE VOTE', user_id, image_id);
  return db
    .query("DELETE FROM votes WHERE user_id = $1 AND image_id = $2 RETURNING id", [user_id, image_id])
    .then((result) => result);
}

module.exports = {
  getImages,
  createVote,
  deleteVote,
  getMostVotedImages,
  getImageById
};
