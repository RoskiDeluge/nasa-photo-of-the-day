import React from "react";
import styled from "styled-components";

const PicCard = styled.div`
  margin: auto;
  width: 80%;
`;

const PicImg = styled.img`
  width: 100%;
`;

const Video = styled.iframe`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const PicTitle = styled.h2`
  font-family: "Arial", sans-serif;
  @media (min-width: 720px) {
    font-size: 3rem;
  }
  ,
  @media (min-width: 320px) {
    font-size: 2rem;
  }
`;

const PicCopyright = styled.p`
  font-family: "Arial", sans-serif;
  @media (min-width: 720px) {
    font-size: 2rem;
  }
  ,
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`;

const PicDate = styled.p`
  font-size: 1rem;
`;

const PicDescription = styled.p`
  @media (min-width: 720px) {
    font-size: 2rem;
  }
  ,
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`;

const PhotoCard = ({
  photoURL,
  photoMedia,
  photoTitle,
  photoCopyright,
  photoDate,
  photoDescription,
}) => {
  return (
    <PicCard>
      {photoMedia === "image" ? (
        <PicImg src={photoURL} alt={photoTitle} />
      ) : (
        <Video
          title="space-video"
          src={photoURL}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      )}

      <PicTitle>{photoTitle}</PicTitle>
      <PicCopyright>By: {photoCopyright}</PicCopyright>
      <PicDate>{photoDate}</PicDate>
      <PicDescription>{photoDescription}</PicDescription>
    </PicCard>
  );
};

export default PhotoCard;
