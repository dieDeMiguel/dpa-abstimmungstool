import React, { Dispatch, SetStateAction } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import ModalStyled from "./Modal.styled";
import ImageContainer from "../ImageContainer/ImageContainer";

interface ImageInteface {
  download_url: string;
  alt: string;
  author: string;
  id: string;
}

interface User {
  username: string;
  id: string;
}
interface ImagesProps {
  images: ImageInteface[];
  user: User;
  setIsPhotoComponentOpen: Dispatch<SetStateAction<boolean>>;
  setBigPhotoURL: Dispatch<SetStateAction<string>>;
}

export default function Modal({
  images,
  user,
  setIsPhotoComponentOpen,
  setBigPhotoURL,
}: ImagesProps) {
  return (
    <ModalStyled>
      <HorizontalScroll className="horizontalScrollComponent">
        <ImageContainer
          images={images}
          user={user}
          isClickable
          setIsPhotoComponentOpen={setIsPhotoComponentOpen}
          setBigPhotoURL={setBigPhotoURL}
        />
      </HorizontalScroll>
    </ModalStyled>
  );
}
