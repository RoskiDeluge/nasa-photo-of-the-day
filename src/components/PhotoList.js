import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
// import { directive } from "@babel/types";

export default function PhotoList() {
  const [photo, setPhoto] = useState([]);

  const didUpdate = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=YyVLpQ23d5kc02e1VfJmd8MKkVAvvHhsheijny7Y")
      .then(response => {
        setPhoto(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, []);

  return (
    <div className="photo">
      return <PhotoCard photoURL={photo.url} photoTitle={photo.title} photoDate={photo.date} photoDescription={photo.explanation} />;
    </div>
  ) 
}