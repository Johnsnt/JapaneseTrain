import "./Card.css";

export default function GalleryItem({ name, img }) {
    return (
        <div className="image-container">
            <div className="title-container">
                <h1>{name}</h1>
            </div>
            <img src={img} alt={name} />
        </div>
    );
};
