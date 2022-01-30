import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import ModalStyled from "./Modal.styled";
import Image from "../Image/Image";

interface ImageInteface {
  download_url: string;
  alt: string;
  author: string;
  width: string;
  height: string;
  id: string;
}

interface ImagesProps {
  images: ImageInteface[];
}

export default function Modal({ images }: ImagesProps) {
  return (
    <ModalStyled>
      <HorizontalScroll>
        {images?.length > 0 &&
          images.map((image: ImageInteface) => {
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
      </HorizontalScroll>
    </ModalStyled>
  );
}
