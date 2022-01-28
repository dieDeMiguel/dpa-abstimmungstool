import spicedPg from "spiced-pg";
const fetch = require("node-fetch");
import { DATABASE_USERNAME } from "./secrets.json"

const db = spicedPg(`postgres:postgres:postgres@localhost:5432/${DATABASE_USERNAME}`);

const dataURL = "https://picsum.photos/v2/list?page=2&limit=100"

// db.query('SELECT * FROM cities').then(function(results) {
//     console.log(results.rows);
// }).catch(function(err) {
//     console.log(err);
// });


async function getData(url) {
    return fetch(url)
.then((result) => result.json())
}

async function saveImage({author, width, height, url}) {
    return db.query("INSERT INTO images (author, width, height, url) VALUES ($1, $2, $3, $4) RETURNING *", [author, width, height, url]).then((result)=> result.rows[0]);
}

(async function(){
    const data = await getData(dataURL);
    console.log('data', data);

    //const image = await saveImage(data[0]);
    //console.log('images', image);
    // await db.end();

    // await Promise.all(data.map(saveImage));
    console.log("done");
})(); 

