import React from "react";
import styled from "styled-components";

const PicCard = styled.div`
  margin: auto;
  width: 80%;
`;

const PicImg = styled.img`
  width: 100%;
`
const PicTitle = styled.h2`
  font-family: 'Impact';
  font-size: 3rem;
`

const PicCopyright = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
`

const PicDate = styled.p`
  font-size: .5rem;
`

const PicDescription = styled.p`
  font-size: 2.5rem;
`

const PhotoCard = props => {
  return (
    <PicCard>
      <PicImg src={props.photoURL} />
      <PicTitle>{props.photoTitle}</PicTitle>
      <PicCopyright>By: {props.photoCopyright}</PicCopyright>
      <PicDate>{props.photoDate}</PicDate>
      <PicDescription>{props.photoDescription}</PicDescription>
    </PicCard>
  );
};

export default PhotoCard;





