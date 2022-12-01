import React from "react";
import { ImageProps, Img } from './style';

const Image = ({
  className,
  marginTop,
  marginBottom,
  width,
  height,
  src,
  alt,
  onClick,
}: ImageProps): JSX.Element => {
  return (
    <Img
      className={className ?? className}
      marginTop={marginTop ?? marginTop}
      marginBottom={marginBottom ?? marginBottom}
      width={width ?? width}
      height={height ?? height}
      src={src}
      alt={alt}
      onClick={onClick ?? onClick}
    />
  );
};

export default Image;
