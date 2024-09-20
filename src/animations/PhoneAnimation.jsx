import React from 'react'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import sm from "../assets/centerp2animation.json"

const style = {
    height: "80%",
};

const options = {
    animationData: sm,
    autoplay: false,
};


const PhoneAnimation = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.2, 0.4],
                type: "seek",
                frames: [0, 25],
            },
            {
                visibility: [0.4, 0.6],
                type: "loop",
                frames: [30, 65],
            }
        ]
    })
    return Animation;
}

export default PhoneAnimation
