// Note: About component...!

import Image from "next/image";

// Note: Importing required images...!
import BedImage from "../../../public/images/bed.jpg";

const About = () => {
    return (
        <>
            <h1> How to use image in Next JS </h1>

            <Image
                alt="Ahmed's Bed"
                src={BedImage}
                // layout="fill"
                height={300}
                width={500}
            >
            </Image>
        </>
    );
};

export default About;