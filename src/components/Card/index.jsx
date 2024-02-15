import './Card.css';

export default function GalleryItem(props) {
    return (
        <div className='container-image'>
            <div className='container-titulo'>
            <h1>{props.name}</h1>
            </div>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

//  <h1>{trainsList.map((train) => (train.name))}</h1>
// {trainType && imagesByType[trainType].map((imagem, index) => (
//     <img
//       key={index}
//       src={imagem}
//       alt={`Imagem ${index + 1} do tipo de trem ${trainType}`}
//     />
//   ))}