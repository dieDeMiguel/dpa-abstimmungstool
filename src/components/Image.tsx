import React from "react";

export default function Image({ url, alt }: { url: string; alt: string }) {
  return (
    <div>
      <img src={url} alt={`Pic's Author: ${alt}`} />
    </div>
  );
}
