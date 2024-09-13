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
                    >The International Foundry Conference and Exhibition (IFCE) 2025 is a groundbreaking event that brings together the global foundry community under one roof. This prestigious gathering is a convergence of the world's leading Foundry Associations, industry experts, and innovators, all united by a shared passion for advancing the foundry industry. IFCE 2025 is a unique platform where the latest trends, technologies, and best practices in the foundry sector will be showcased, discussed, and debated.
<br />
<br />
                    At IFCE 2025, attendees will have the opportunity to connect with fellow professionals from around the world, learn from industry thought leaders, and explore the latest innovations and solutions that are shaping the future of the foundry industry. With a focus on fostering collaboration, driving growth, and promoting sustainable development, IFCE 2025 is poised to be a landmark event that will set the tone for the future of the foundry industry. Join us at IFCE 2025 and be a part of this exciting journey!</p>

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
