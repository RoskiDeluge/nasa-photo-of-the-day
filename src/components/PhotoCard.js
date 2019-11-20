import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-list">
      <img className="photo-style" alt="Nasa Photo of the Day" src={props.photoURL} />
      <h2>{props.photoTitle}</h2>
      <p>{props.photoDate}</p>
      <p>{props.photoDescription}</p>
    </div>
  );
};

export default PhotoCard;