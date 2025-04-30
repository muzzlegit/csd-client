import { useState } from "react";
import { MdOutlineNoPhotography } from "react-icons/md";
import { ImageWrap, Img } from "./ImageComponent.styled";

type ImageProps = {
  imageUrl?: string | null;
  alt?: string;
  width?: string;
  height?: string;
};

export const ImageComponent = ({
  imageUrl,
  alt,
  width,
  height,
}: ImageProps) => {
  const [isImage, setIsImage] = useState(!!imageUrl);

  return (
    <ImageWrap width={width} height={height}>
      {isImage ? (
        <Img
          src={imageUrl || ""}
          alt={alt || "Зображення"}
          onError={() => {
            setIsImage(false);
          }}
        />
      ) : (
        <MdOutlineNoPhotography size={height || width} />
      )}
    </ImageWrap>
  );
};
