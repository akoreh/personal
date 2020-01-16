import batteryAnimationData from '../../assets/anim/battery.json';
import wifiAnimationData from '../../assets/anim/wifi.json';

const animatedIcons = [
    {
        name: 'wifiIndicator',
        animationData: wifiAnimationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
        containerStyle: {
            width: '2.5rem',
            marginLeft: '-.6rem',
            pointerEvents: 'none',
        },
    },
    {
        name: 'batteryIndicator',
        animationData: batteryAnimationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
        startDelay: 10,
        containerStyle: {
            width: '7.5rem',
            marginRight: '-3rem',
            marginLeft: '-3.5rem',
            pointerEvents: 'none',
        },
    },
];

export default animatedIcons;