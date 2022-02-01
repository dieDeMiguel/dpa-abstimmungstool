import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import ImageStyled from "./Image.styled";
import ImageContentComponent from "../ImageContentComponent/ImageContentComponent";

export default function Image({
  url,
  id,
  user,
  author,
  isClickable = true,
  setIsPhotoComponentOpen,
  setBigPhotoURL,
}: {
  url: string;
  id: string;
  user: string;
  author: string;
  isClickable: boolean;
  setIsPhotoComponentOpen: Dispatch<SetStateAction<boolean>>;
  setBigPhotoURL: Dispatch<SetStateAction<string>>;
}) {
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  const handleChange = (imageId: string, userId: string) => {
    if (isImageSelected) {
      axios({
        url: `/api/vote/${imageId}/${userId}`,
        method: "delete",
        data: {
          image_id: imageId,
          user_id: userId,
        },
      })
        .then(() => {
          setIsImageSelected(false);
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      axios
        .post("/api/vote", {
          image_id: imageId,
          user_id: parseInt(userId, 10),
        })
        .then(() => {
          setIsImageSelected(true);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };
  return (
    <ImageStyled className="imageStyled">
      <div className="check-card flex justify-content-center">
        <div className={clsx("check-card-item")}>
          {isClickable ? (
            <label htmlFor={id} className="cardWrapper">
              <input
                type="checkbox"
                key={id}
                id={id}
                name={user}
                onChange={() => handleChange(id, user)}
                checked={isImageSelected}
              />

              <ImageContentComponent
                url={url}
                author={author}
                isVotable
                setIsPhotoComponentOpen={setIsPhotoComponentOpen}
                setBigPhotoURL={setBigPhotoURL}
              />
            </label>
          ) : (
            <div className="topImageWrapper">
              <ImageContentComponent
                url={url}
                author={author}
                isVotable={false}
                setIsPhotoComponentOpen={setIsPhotoComponentOpen}
                setBigPhotoURL={setBigPhotoURL}
              />
            </div>
          )}
        </div>
      </div>
    </ImageStyled>
  );
}
