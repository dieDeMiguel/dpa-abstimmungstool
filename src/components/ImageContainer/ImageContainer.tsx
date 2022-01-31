import React, { Dispatch, SetStateAction } from "react";
import Image from "../Image/Image";

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
  isClickable: boolean;
  setIsPhotoComponentOpen: Dispatch<SetStateAction<boolean>>;
  setBigPhotoURL: Dispatch<SetStateAction<string>>;
}

export default function ImageContainer({
  images,
  user,
  isClickable,
  setIsPhotoComponentOpen,
  setBigPhotoURL,
}: ImagesProps) {
  return (
    <div className="cardWrapper">
      {images?.length > 0 ? (
        images.map((image: ImageInteface) => {
          return (
            <Image
              key={image.download_url}
              url={image.download_url}
              user={user.id}
              author={image.author}
              id={image.id}
              isClickable={isClickable}
              setIsPhotoComponentOpen={setIsPhotoComponentOpen}
              setBigPhotoURL={setBigPhotoURL}
            />
          );
        })
      ) : (
        <h3 className="topPhotosHeading">Es gibt noch keine Fotos</h3>
      )}
    </div>
  );
}
