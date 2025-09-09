export default function PhotoCard ({img, alt}) {
    const randomRotation = Math.random() * 4 - 2; 

  return (
    <div className="photo-card" style={{ transform: `rotate(${randomRotation}deg)` }}>
        <img src={img} alt={alt} />
    </div>
  );
}