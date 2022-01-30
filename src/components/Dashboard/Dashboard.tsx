/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { useLocation } from "react-router";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";
import DashboardStyled from "./Dashboard.styled";

const { PORT } = require("../../secrets.json");

axios.defaults.baseURL = `http://localhost:${PORT}`;

interface Images {
  download_url: string;
  alt: string;
  author: string;
  id: string;
}

export default function Dashboard() {
  const [images, setImages] = useState<Images[] | []>([]);
  const [topImages, setTopImages] = useState<Images[] | []>([]);
  const [isModalopen, setisModalopen] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<any>();
  const { state: user } = useLocation();

  useEffect(() => {
    setActiveUser(user);
  }, [user]);

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
    if (isModalopen === true) {
      axios({
        method: "get",
        url: "/api/images/top",
      }).then((response) => setTopImages(response.data));
    }
    setisModalopen(!isModalopen);
  };

  return (
    <div className="mainWrapper">
      <DashboardStyled
        className={clsx(
          "flex align-items-center justify-content-center",
          isModalopen && "changeBackground"
        )}
      >
        <div className="heading">
          <h1>DPA Abstimmungs Tool</h1>
        </div>

        <>
          {topImages?.length !== 0 && (
            <h3 className="topPhotosHeading">
              {isModalopen
                ? " Hier könnt ihr über die Fotos abstimmen"
                : "Fotos mit den meisten Stimmen"}
            </h3>
          )}
          <h3 className="topPhotosHeading">
            {topImages?.length === 0 &&
              !isModalopen &&
              "Es gibt noch keine ausgewählten Fotos"}
          </h3>
          <div
            className={clsx(
              "cardWrapper flex",
              isModalopen && "hiddenTabletUp"
            )}
          >
            {isModalopen && topImages?.length > 0
              ? images.map((image: Images) => {
                  return (
                    <Image
                      key={image.download_url}
                      url={image.download_url}
                      alt={image.author}
                      user={activeUser.id}
                      author={image.author}
                      id={image.id}
                      isClickable
                    />
                  );
                })
              : topImages.map((image: Images) => {
                  return (
                    <Image
                      key={image.download_url}
                      url={image.download_url}
                      alt={image.author}
                      user={activeUser.id}
                      author={image.author}
                      id={image.id}
                      isClickable={false}
                    />
                  );
                })}
          </div>
        </>

        <div className="modalContainer">
          {isModalopen && <Modal images={images} user={activeUser} />}
        </div>
        <div>
          <button type="button" onClick={toggleModal} className="btn">
            {isModalopen
              ? "Abstimmungstool schließen"
              : "Abstimmungstool öffnen"}
          </button>
        </div>
      </DashboardStyled>
    </div>
  );
}
