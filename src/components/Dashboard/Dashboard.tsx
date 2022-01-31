/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { useLocation } from "react-router";
import Modal from "../Modal/Modal";
import DashboardStyled from "./Dashboard.styled";
import ImageContainer from "../ImageContainer/ImageContainer";
import HeadingComponent from "../HeadingComponent./HeadingComponent";
import { textContent } from "../../ContentFile";
import PhotoComponent from "../PhotoComponent/PhotoComponent";

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
  const [isPhotoComponentOpen, setIsPhotoComponentOpen] =
    useState<boolean>(false);
  const [bigPhotoURL, setBigPhotoURL] = useState<string>("");

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
    <main className="container">
      <DashboardStyled
        className={clsx(
          "flex align-items-center justify-content-center",
          isModalopen && "changeBackground"
        )}
      >
        <div className="heading">
          <h1>DPA Abstimmungs Tool</h1>
        </div>

        <div className="buttonWrapper">
          <button type="button" onClick={toggleModal} className="btn">
            {isModalopen
              ? "Abstimmungstool schließen"
              : "Abstimmungstool öffnen"}
          </button>
        </div>

        <section className="topPhotosWrapper">
          {isPhotoComponentOpen && (
            <PhotoComponent
              url={bigPhotoURL}
              setIsPhotoComponentOpen={setIsPhotoComponentOpen}
            />
          )}
          {isModalopen ? (
            <HeadingComponent
              className="topPhotosHeading"
              condition={images?.length > 0}
              content={textContent.vote}
              defaultValue={textContent.noPhotos}
            />
          ) : (
            <HeadingComponent
              className="topPhotosHeading"
              condition={topImages?.length > 0}
              content={textContent.mostVoted}
              defaultValue={textContent.noTopPhotos}
            />
          )}
          <div>
            {isModalopen ? (
              <ImageContainer
                images={images}
                user={activeUser}
                isClickable
                setIsPhotoComponentOpen={setIsPhotoComponentOpen}
                setBigPhotoURL={setBigPhotoURL}
              />
            ) : (
              <ImageContainer
                images={topImages}
                user={activeUser}
                isClickable={false}
                setIsPhotoComponentOpen={setIsPhotoComponentOpen}
                setBigPhotoURL={setBigPhotoURL}
              />
            )}
          </div>
        </section>

        <div className="buttonWrapper">
          <button type="button" onClick={toggleModal} className="btn">
            {isModalopen
              ? "Abstimmungstool schließen"
              : "Abstimmungstool öffnen"}
          </button>
        </div>
      </DashboardStyled>
    </main>
  );
}
