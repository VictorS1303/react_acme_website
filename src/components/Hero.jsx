import Image from 'next/image'
import heroImage from '@/images/hero/showcase.jpg'

import Section from './Section'


const Hero = () => {
    return (
        <Section>
            <div className="h-[600px] w-[100%] relative grid place-content-center">
                <Image
                    src={heroImage}
                    layout="fill"  // Ensures the image fills the container
                    objectFit="cover"  // Maintains aspect ratio and scales to fit
                    alt="hero image"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                    <h2 className="text-white text-6xl font-bold">
                        <span className="text-orange-500">Affordable</span>&nbsp;Web Design
                    </h2>
                    <p className="mt-4 text-xl word-wrap">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Exercitationem, earum. Excepturi quam officia eum est aliquam debitis repellat blanditiis expedita?
                    </p>
                </div>
            </div>
        </Section>
    );
}

 
export default Hero