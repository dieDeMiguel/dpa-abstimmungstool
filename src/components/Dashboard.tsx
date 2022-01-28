/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import axios from "axios";
import Image from "./Image";

axios.defaults.baseURL = "http://localhost:8081";

export default function Dashboard() {
  axios({
    method: "get",
    url: "/api/images",
  }).then((response) => console.log("response", response));
  return (
    <main>
      <div className="photoWrapper">
        <Image
          url="https://picsum.photos/id/21/3008/2008"
          alt="Alejandro Escamilla"
        />
      </div>
    </main>
  );
}
