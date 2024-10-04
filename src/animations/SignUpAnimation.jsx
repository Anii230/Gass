import { useLottie, useLottieInteractivity } from 'lottie-react';
import sa from '../assets/SignUpAnimation.json';

const style = {
    height: '80%',
};

const options = {
    animationData: sa,
    autoplay: false,
};

const SignUpAnimation = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.2, 0.9],
                type: "seek",
                frames: [0, 200],
            },
        ]
    });

    return Animation;
};

export default SignUpAnimation;
