import Padding from "@/components/atoms/Padding";
import {Carousel} from "flowbite-react";

function GuideCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10">
            <Carousel>
                <img
                    src="/notice-1.png"
                    alt="notice-1"
                    className="object-contain h-full bg-[#1B2528]"
                />
                <img
                    src="/notice-2.png"
                    alt="notice-1"
                    className="object-contain h-full bg-[#3949AB]"
                />
            </Carousel>
        </div>
    );
}

const LandingPage = () => {
    return (
        <Padding className="relative">
            <GuideCarousel />
        </Padding>
    )
}

export default LandingPage;