import React from 'react';
import SlidesAndText from '../../../utils/SlidesAndText/SlidesAndText';


import historySlide1 from '../../../assets/OurHistory/slide1.jpg';
import historySlide2 from '../../../assets/OurHistory/slide2.jpg';
import historySlide3 from '../../../assets/OurHistory/slide3.jpg';
import historySlide4 from '../../../assets/OurHistory/slide4.jpg';
import historySlide5 from '../../../assets/OurHistory/slide5.jpg';

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

    const slides = [
        {
            image: historySlide1, alt: 'history slide 1',
        },
        {
            image: historySlide2, alt: 'history slide 2',
        },
        {
            image: historySlide3, alt: 'history slide 3',
        },
        {
            image: historySlide4, alt: 'history slide 4',
        },
        {
            image: historySlide5, alt: 'history slide 5',
        },
    ];

    return (
        <SlidesAndText
            className="md:my-32"
            title="OUR HISTORY"
            description={`The International Foundry Conference and Exhibition (IFCE) has a rich history spanning over nine years, with the first event held in 2016. Since then, IFCE has grown to become one of the premier global events for the foundry industry, attracting thousands of attendees from around the world. Over the years, IFCE has established itself as a platform for knowledge sharing, innovation, and collaboration, bringing together industry leaders, experts, and associations to shape the future of the foundry sector.

The previous eight editions of IFCE have been a testament to the event's growing popularity and influence. Each edition has built upon the success of the previous one, with a steady increase in attendance, exhibitors, and conference sessions. IFCE has also expanded its scope to include new topics and themes, reflecting the evolving needs and trends of the foundry industry. From technological advancements to sustainability and environmental concerns, IFCE has addressed the most pressing issues facing the industry, providing a platform for discussion, debate, and solution-finding.

As we approach the ninth edition of IFCE in 2025, we can expect an even more comprehensive and engaging event. With a focus on innovation, education, and networking, IFCE2025 promises to be a landmark event that will set the tone for the future of the foundry industry. Building on the success of the previous eight editions, IFCE2025 will bring together the global foundry community to share knowledge, showcase innovations, and drive progress. Join us at IFCE2025 and be a part of this exciting journey!`
                .split('\n')
                .map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))


            }
            slides={slides}
            reverse={true}
        />
    );
}

export default OurHistory;
