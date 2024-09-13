import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../../assets/IFCE2025/slide1.jpg';
import slide2 from '../../../assets/IFCE2025/slide2.jpg';
import slide3 from '../../../assets/IFCE2025/slide3.jpg';
import slide4 from '../../../assets/IFCE2025/slide4.jpg';
import slide5 from '../../../assets/IFCE2025/slide5.jpg';

function IFCE2025() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    const slides = [
        {
            image: slide1,
            alt: 'Slide 1',
        },
        {
            image: slide2,
            alt: 'Slide 2',
        },
        {
            image: slide3,
            alt: 'Slide 3',
        },
        {
            image: slide4,
            alt: 'Slide 4',
        },
        {
            image: slide5,
            alt: 'Slide 5',
        },
    ];

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto px-4 md:flex md:items-center">
                {/* Text Section */}
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">


                    {/* Heading */}
                    <h2 className="text-darkGray text-3xl md:text-6xl font-bold text-center md:text-left">
                        IFCE 2025
                    </h2>

                    {/* Event Info */}

                    <p 
                    className='mt-2'
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, odit repellat officia corporis provident ea illum commodi, minus temporibus laudantium dolor laboriosam quo omnis totam ducimus accusamus consequatur reiciendis hic libero mollitia soluta vitae debitis? Laudantium nostrum, sint, veniam vel rerum, aperiam eius esse reiciendis quasi consequuntur adipisci cum ad!</p>

                </div>

                {/* Slider Section */}
                <div className="md:w-1/2">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="w-full">
                                <img
                                    loading='lazy'
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default IFCE2025;
