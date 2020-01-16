import batteryAnimationData from '../../assets/anim/battery.json';

const animatedIcons = [
    {
        name: 'batteryIndicator',
        animationData: batteryAnimationData,
        loop: true,
        autoplay: true,
        speed: 0.1,
        containerStyle: {
            width: '7.5rem',
            marginRight: '-3rem',
            marginLeft: '-3rem',
            pointerEvents: 'none',
        },
    },
];

export default animatedIcons;