import React from 'react';

import slide1 from '../../../assets/IFCE2025/slide1.jpg';
import slide2 from '../../../assets/IFCE2025/slide2.jpg';
import slide3 from '../../../assets/IFCE2025/slide3.jpg';
import slide4 from '../../../assets/IFCE2025/slide4.jpg';
import slide5 from '../../../assets/IFCE2025/slide5.jpg';
import { SlidesAndText } from '../../../utils';

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
        <SlidesAndText
            className="my-16"
            title="IFCE 2025"
            description={
                "The International Foundry Conference and Exhibition (IFCE) 2025 is a groundbreaking event that brings together the global foundry community under one roof. This prestigious gathering is a convergence of the world's leading Foundry Associations, industry experts, and innovators, all united by a shared passion for advancing the foundry industry. IFCE 2025 is a unique platform where the latest trends, technologies, and best practices in the foundry sector will be showcased, \n\n At IFCE 2025, attendees will have the opportunity to connect with fellow professionals from around the world, learn from industry thought leaders, and explore the latest innovations and solutions that are shaping the future of the foundry industry. With a focus on fostering collaboration, driving growth, and promoting sustainable development, IFCE 2025 is poised to be a landmark event that will set the tone for the future of the foundry industry. Join us at IFCE 2025 and be a part of this exciting journey!"
                .split('\n')
                .map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))
            }
            slides={slides}
            reverse={false}
        />
    );
    
}

export default IFCE2025;
