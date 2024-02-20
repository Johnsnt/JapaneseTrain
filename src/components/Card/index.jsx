import "./Card.css";

export default function GalleryItem({name, img}) {
    return (
    <div className="container-image">
            <div className="container-titulo">
            <h1>{name}</h1>
            </div>
            <img src={img} alt={name} className="imagem" />
        </div>
    )
};
