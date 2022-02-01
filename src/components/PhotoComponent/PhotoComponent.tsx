import React, { Dispatch, SetStateAction } from "react";
import PhotoComponentStyled from "./PhotoComponent.styled";

export default function PhotoComponent({
  url,
  setIsPhotoComponentOpen,
}: {
  url: string;
  setIsPhotoComponentOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <PhotoComponentStyled>
      <div className="innerWrapper">
        <div className="image" style={{ backgroundImage: `url(${url})` }} />
        <button
          className="btn close"
          type="button"
          onClick={() => setIsPhotoComponentOpen(false)}
        >
          X
        </button>
      </div>
    </PhotoComponentStyled>
  );
}
