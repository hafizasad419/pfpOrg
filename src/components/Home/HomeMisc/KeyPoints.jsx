import React from 'react';
import SlidesAndText from '../../../utils/SlidesAndText/SlidesAndText';

// Example images for the slides
import keyPointSlide1 from '../../../assets/KeyPoints/slide1.jpg';
import keyPointSlide2 from '../../../assets/KeyPoints/slide2.jpg';
import keyPointSlide3 from '../../../assets/KeyPoints/slide3.jpg';
import keyPointSlide4 from '../../../assets/KeyPoints/slide4.jpg';
import keyPointSlide5 from '../../../assets/KeyPoints/slide5.jpg';

function KeyPoints() {
  

    const slides = [
        {
            image: keyPointSlide1,
            alt: 'Key Point slide 1',
        },
        {
            image: keyPointSlide2,
            alt: 'Key Point slide 2',
        },
        {
            image: keyPointSlide3,
            alt: 'Key Point slide 3',
        },
        {
            image: keyPointSlide4,
            alt: 'Key Point slide 4',
        },
        {
            image: keyPointSlide5,
            alt: 'Key Point slide 5',
        },
    ];

    return (
        <SlidesAndText
            className="md:my-32"
            title="IFCE 2025 Key Points"
            description={
                `IFCE2025 is poised to be a groundbreaking event that will bring together the global foundry community to share knowledge, showcase innovations, and drive progress. The event will feature a comprehensive conference program with keynote sessions, technical presentations, and panel discussions, focusing on the latest trends, technologies, and best practices in the foundry industry. Additionally, the exhibition will showcase the latest products, services, and solutions from leading companies and startups, providing attendees with a unique opportunity to explore new technologies and innovations.
                
Key Points:
- More than 60 exhibitors including foundries and suppliers
- More than 30 Industrial sectors visiting
- Technical Sessions by local and global experts
- Commercial Sessions by Industrial sectors
- Localized development of imported castings`
                    .split('\n')
                    .map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))
            }
            slides={slides}
            reverse={false} // Modify as needed to change the layout
        />
    );
}

export default KeyPoints;
