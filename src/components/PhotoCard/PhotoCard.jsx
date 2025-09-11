export default function PhotoCard ({img, alt}) {
    const randomRotation = Math.random() * 4 - 2; 

  return (
    <div className="photo-card">
      <div className="card-image">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}