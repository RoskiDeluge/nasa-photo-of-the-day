import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PhotoList() {
  const [photo, setPhoto] = useState([]);

  const didUpdate = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        setPhoto(response.data);
        console.log("rd: didUpdate res:", response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(didUpdate, []);

  if (!photo) return <div>No photo right now, please check back later</div>;

  return (
    <div className="photo">
      <PhotoCard
        photoURL={photo.url}
        photoMedia={photo.media_type}
        photoTitle={photo.title}
        photoDate={photo.date}
        photoDescription={photo.explanation}
        photoCopyright={photo.copyright}
      />
    </div>
  );
}
