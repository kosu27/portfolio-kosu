import Image from "next/image";
import type { FC } from "react";

export type NextImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  imageType?: "hero" | "card";
};

const NextImage: FC<NextImageProps> = (props: NextImageProps) => {
  const { alt, height, imageType, src, width } = props;

  return (
    <>
      {imageType ? (
        imageType === "hero" ? (
          <Image
            src={src}
            alt={alt}
            layout="fill"
            priority={true}
            objectFit="cover"
            objectPosition="55% 30%"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            objectFit="contain"
            width={200}
            height={200}
          />
        )
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width as number}
          height={height as number}
        />
      )}
    </>
  );
};

export { NextImage };
