/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";

axios.defaults.baseURL = "http://localhost:8081";

export interface Images {
  download_url: string;
  alt: string;
  author: string;
  width: string;
  height: string;
}

export default function Dashboard() {
  const [images, setImages] = useState<Images[] | []>([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/images",
    }).then((response) => setImages(response.data));
  }, []);

  useEffect(() => {
    console.log("imaaaages", images);
  }, [images]);

  return (
    <main>
      <div className="photoWrapper">
        {images?.length &&
          images.map((image: Images) => {
            const newWidth = parseInt(image.width, 10) / 10;
            const newHeight = parseInt(image.height, 10) / 10;
            return (
              <Image
                url={image.download_url}
                alt={`Pic by ${image.author}`}
                width={newWidth.toString()}
                height={newHeight.toString()}
              />
            );
          })}
      </div>
    </main>
  );
}
