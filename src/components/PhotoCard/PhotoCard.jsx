export default function PhotoCard ({img, alt}) {
    const randomRotation = Math.random() * 4 - 2; 

  return (
    <div className="photo-card">
        <img src={img} alt={alt} />
    </div>
  );
}