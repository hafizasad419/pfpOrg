import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidesAndText = ({ title, description, slides, reverse,className }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className={`container mx-auto px-4 md:flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${className}`}>
            {/* Text Section */}
            <div className={`md:w-1/2 md:pr-8 mb-8 md:mb-0 ${reverse ? 'md:ml-8' : ''}`}>
                {/* Heading */}
                <h2 className="text-darkGray text-3xl md:text-6xl font-bold text-center md:text-left">
                    {title}
                </h2>

                {/* Event Info */}
                <p className="mt-2">
                    {description}
                </p>
            </div>

            {/* Slider Section */}
            <div className="md:w-1/2">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full">
                            <img
                                loading="lazy"
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default SlidesAndText;
