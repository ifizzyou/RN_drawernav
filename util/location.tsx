import React from "react";

const GOOGLE_API_KEY = "AIzaSyDdGpHW4DoraLYVEFpKRqCk0-Do3RxFs_k";

export const getMapPreview = (lat: number, lng: number) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&
maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
};

export const getAddress = async (lat: number, lng: number) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Falied to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
};
