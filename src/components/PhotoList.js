import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PhotoList() {
  const [photo, setPhoto] = useState([]);
  const [noPhotoError, setnoPhotoError] = useState([]);

  const didUpdate = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        setPhoto(response.data);
        console.log("rd: didUpdate res:", response);
      })
      .catch((error) => {
        setnoPhotoError(error);
        console.log("rd: didUpdate error: ", error);
      });
  };

  useEffect(didUpdate, []);

  // let error = JSON.stringify(noPhotoError);

  return (
    <div className="photo">
      <PhotoCard
        photoURL={photo.url}
        photoMedia={photo.media_type}
        photoTitle={photo.title}
        photoDate={photo.date}
        photoDescription={photo.explanation}
        photoCopyright={photo.copyright}
        photoError={noPhotoError.message}
      />
    </div>
  );
}
