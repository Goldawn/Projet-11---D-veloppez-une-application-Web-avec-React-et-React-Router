import React, {useState} from 'react';
import arrowLeft from "../../assets/icons/arrow-left.svg"
import arrowRight from "../../assets/icons/arrow-right.svg"
import './Carousel.css'

export default function Carousel(props) {

    const imageList = props.data;

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? imageList.length -1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === imageList.length - 1 ? 0 : current + 1)
    }

    return (
        <section id="carousel">
            {
                imageList.map((image, index) => {
                    return (
                        <picture key={index} className={index === current ? 'active' : ""}>
                            {index === current && (<img src={image} key={index} alt=""></img>)}
                        </picture>
                    )
                })
            }
            { imageList.length > 1 &&(
                <div id="gallery-control">
                <img src={arrowLeft} className="arrow" alt="arrow-left" onClick={prevSlide}/>
                <img src={arrowRight} className="arrow" alt="arrow-right" onClick={nextSlide}/>
            </div>
            )}
            
        </section>
    )
}