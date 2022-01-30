import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import ModalStyled from "./Modal.styled";
import Image from "../Image/Image";

interface ImageInteface {
  download_url: string;
  alt: string;
  author: string;
  id: string;
}

interface User {
  username: string;
  id: number;
}
interface ImagesProps {
  images: ImageInteface[];
  user: User;
}

export default function Modal({ images, user }: ImagesProps) {
  return (
    <ModalStyled>
      <HorizontalScroll className="horizontalScrollComponent">
        {images?.length > 0 &&
          images.map((image: ImageInteface) => {
            return (
              <Image
                key={image.download_url}
                url={image.download_url}
                alt={image.author}
                user={user.id.toString()}
                author={image.author}
                id={image.id}
                isClickable
              />
            );
          })}
      </HorizontalScroll>
    </ModalStyled>
  );
}
