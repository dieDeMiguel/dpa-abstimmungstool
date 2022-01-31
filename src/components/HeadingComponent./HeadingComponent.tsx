/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import React from "react";

interface HeadingProps {
  className: string;
  condition: boolean;
  content: string;
  defaultValue: string;
}

export default function HeadingComponent({
  className,
  condition,
  content,
  defaultValue,
}: HeadingProps) {
  return (
    <h3 className={clsx(className)}>{condition ? content : defaultValue}</h3>
  );
}
