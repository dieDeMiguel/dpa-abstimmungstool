import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageStyled from "./Image.styled";

export default function Image({
  url,
  alt,
  width,
  height,
  id,
  user,
  author,
  isClickable = true,
}: {
  url: string;
  alt: string;
  width: string;
  height: string;
  id: string;
  user: string;
  author: string;
  isClickable: boolean;
}) {
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  useEffect(() => {}, [isImageSelected]);

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
    <ImageStyled className="card-box">
      <div className="card ">
        <ul className="check-card">
          <li className="check-card-item">
            {isClickable ? (
              <label htmlFor={id}>
                <input
                  type="checkbox"
                  key={id}
                  id={id}
                  name={user}
                  onChange={() => handleChange(id, user)}
                  checked={isImageSelected}
                />

                <div className="check-card-body flex align-items-center justify-content-center ">
                  <div className="card-icon flex align-items-center">
                    <img src={url} alt={alt} width={width} height={height} />
                  </div>

                  <div className="check-card-check-icon">
                    <img
                      src="images/icons/check.svg"
                      alt="Checked Icon"
                      width="75"
                      height="75"
                    />{" "}
                  </div>
                </div>
                <div className="flex justify-content-center align-items-center">
                  <h3 className="check-card-title">Author: {author}</h3>
                </div>
              </label>
            ) : (
              <div className="topImageWrapper">
                <div className="check-card-body flex align-items-center justify-content-center ">
                  <div className="card-icon flex align-items-center">
                    <img src={url} alt={alt} width={width} height={height} />
                  </div>

                  <div className="check-card-check-icon">
                    <img
                      src="images/icons/check.svg"
                      alt="Checked Icon"
                      width="75"
                      height="75"
                    />{" "}
                  </div>
                </div>
                <div className="flex justify-content-center align-items-center">
                  <h3 className="check-card-title">Author: {author}</h3>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </ImageStyled>
  );
}
