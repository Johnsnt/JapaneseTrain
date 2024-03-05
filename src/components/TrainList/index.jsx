import './TrainList.css';
import GalleryItem from '../Card';
import { arrow } from '../../assets/items/';

export default function TrainList({ trainCollection }) {
    return (
        <>
            <section className="train-image-section">
                <div className="gallery">
                    {trainCollection.map((item) => (
                        <GalleryItem
                            key={item.id}
                            name={item.name}
                            img={item.img}
                        />
                    ))}
                </div>
                <a href="#top" className="arrowBtn">
                    <img src={arrow} alt="topArrow" />
                </a>
            </section>
        </>
    );
};


