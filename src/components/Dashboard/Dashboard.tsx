/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";

const { PORT } = require("../../secrets.json");

axios.defaults.baseURL = `http://localhost:${PORT}`;

interface Images {
  download_url: string;
  alt: string;
  author: string;
  width: string;
  height: string;
  id: string;
}

export default function Dashboard() {
  const [images, setImages] = useState<Images[] | []>([]);
  const [topImages, setTopImages] = useState<Images[] | []>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/images",
    }).then((response) => setImages(response.data));
    axios({
      method: "get",
      url: "/api/images/top",
    }).then((response) => setTopImages(response.data));
  }, []);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="buttonBox flex header-holder center-relative relative pt-6">
        {images?.length > 0 &&
          images.map((image: Images) => {
            const newWidth = parseInt(image.width, 10) / 10;
            const newHeight = parseInt(image.height, 10) / 10;
            return (
              <Image
                key={image.download_url}
                url={image.download_url}
                alt={image.author}
                width={newWidth.toString()}
                height={newHeight.toString()}
                user="1"
                author={image.author}
                id={image.id}
                isClickable
              />
            );
          })}
      </div>
      <div>
        <button type="button" onClick={toggleModal}>
          Toggle modal
        </button>
        <Modal images={images} />
      </div>
      <div className="buttonBox flex header-holder center-relative relative pt-6">
        {topImages?.length > 0 ? (
          topImages.map((image: Images) => {
            const newWidth = parseInt(image.width, 10) / 10;
            const newHeight = parseInt(image.height, 10) / 10;
            return (
              <Image
                key={Math.random()}
                url={image.download_url}
                alt={image.author}
                width={newWidth.toString()}
                height={newHeight.toString()}
                user="1"
                author={image.author}
                id={image.id}
                isClickable={false}
              />
            );
          })
        ) : (
          <p>No Top Images Yet</p>
        )}
      </div>
    </main>
  );
}
