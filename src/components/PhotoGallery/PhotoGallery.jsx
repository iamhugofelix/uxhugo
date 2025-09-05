import PhotoCard from "../PhotoCard/PhotoCard";

export default function PhotoGallery ({
    firstImage, firstImageAlt, 
    secondImage, secondImageAlt,
    thirdImage, thirdImageAlt,
    fourthImage, fourthImageAlt}) {
  return (
    <div className="photo-gallery">
      {firstImage ? <PhotoCard img={firstImage} alt={firstImageAlt} /> : ""}
      {secondImage ? <PhotoCard img={secondImage} alt={secondImageAlt} /> : ""}
      {thirdImage ? <PhotoCard img={thirdImage} alt={thirdImageAlt} /> : ""}
      {fourthImage ? <PhotoCard img={fourthImage} alt={fourthImageAlt} /> : ""}
    </div>
  );
}