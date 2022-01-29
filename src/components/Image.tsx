import React from "react";

export default function Image({
  url,
  alt,
  width,
  height,
}: {
  url: string;
  alt: string;
  width: string;
  height: string;
}) {
  return (
    <div>
      <img
        src={url}
        alt={`Pic's Author: ${alt}`}
        width={width}
        height={height}
      />
    </div>
  );
}
