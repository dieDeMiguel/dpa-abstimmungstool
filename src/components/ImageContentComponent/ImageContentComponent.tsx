import React, { Dispatch, SetStateAction } from "react";

export default function ImageContentComponent({
  url,
  author,
  isVotable,
  setIsPhotoComponentOpen,
  setBigPhotoURL,
}: {
  url: string;
  author: string;
  isVotable: boolean;
  setIsPhotoComponentOpen: Dispatch<SetStateAction<boolean>>;
  setBigPhotoURL: Dispatch<SetStateAction<string>>;
}) {
  const handleClick = () => {
    setBigPhotoURL(url);
    setIsPhotoComponentOpen(true);
  };

  return (
    <>
      <div className="check-card-body flex align-items-center justify-content-center ">
        <div
          className="card-icon flex align-items-center"
          style={{ backgroundImage: `url(${url})` }}
        />

        <div className="check-card-check-icon">
          <img
            src="images/icons/check.svg"
            alt="Checked Icon"
            width="75"
            height="75"
          />{" "}
        </div>
      </div>
      <div className="flex justify-content-center align-items-center column">
        <div className="cameraIconWrapper">
          <img
            className="cameraIcon"
            src="/images/icons/camera.svg"
            alt="CameraIcon"
          />
          <h4 className="check-card-title">{author}</h4>
        </div>

        {isVotable && (
          <button className="btn btnCard" type="button" onClick={handleClick}>
            Foto ansehen
          </button>
        )}
      </div>
    </>
  );
}
