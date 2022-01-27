fetch("https://picsum.photos/v2/list?page=2&limit=100")
.then((result) => result.json())
.then((res) => console.log("res", res));
