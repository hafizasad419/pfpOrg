import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import the new images for OurHistory
// import historySlide1 from '../../../assets/OurHistory/slide1.webp';
// import historySlide2 from '../../../assets/OurHistory/slide2.webp';
// import historySlide3 from '../../../assets/OurHistory/slide3.webp';

function OurHistory() {
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

    // const slides = [
    //     {
    //         image: historySlide1,
    //         alt: 'history slide 1',
    //     },
    //     {
    //         image: historySlide2,
    //         alt: 'history slide 2',
    //     },
    //     {
    //         image: historySlide3,
    //         alt: 'history slide 3',
    //     },
    // ];

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto px-4 md:flex md:items-center">
                {/* Text Section */}
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">


                    {/* Heading */}
                    <h2 className="text-darkGray text-3xl md:text-6xl font-bold text-center md:text-left">
                        Our History
                    </h2>

                    {/* History Info */}

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

export default OurHistory;
