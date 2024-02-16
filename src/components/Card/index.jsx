import "./Card.css";

export default function GalleryItem(props) {
    return (
        <div className="container-image">
            <div className="container-titulo">
            <h1>{props.name}</h1>
            </div>
            <img src={props.img} alt={props.name} />
        </div>
    )
};
