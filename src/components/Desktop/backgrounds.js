import Bg1L0 from '../../assets/img/backgrounds/parallax/0.png';
import Bg1L2 from '../../assets/img/backgrounds/parallax/2.png';
import Bg1L1 from '../../assets/img/backgrounds/parallax/1.png';
import Bg1L3 from '../../assets/img/backgrounds/parallax/3.png';
import Bg1L4 from '../../assets/img/backgrounds/parallax/4.png';
import Bg1L5 from '../../assets/img/backgrounds/parallax/5.png';
import Bg1L6 from '../../assets/img/backgrounds/parallax/6.png';

const backgrounds = {
    parallax: {
        firewatch1: {
            layers: [
                {
                    src: Bg1L0,
                    style: {transform: 'translateZ(-300px) scale(4)'},
                },
                {
                    src: Bg1L1,
                    style: {transform: 'translateZ(-250px) scale(3.5)'},
                },
                {
                    src: Bg1L2,
                    style: {transform: 'translateZ(-200px) scale(3)'},
                },
                {
                    src: Bg1L3,
                    style: {transform: 'translateZ(-150px) scale(2.5)'},
                },
                {
                    src: Bg1L4,
                    style: {transform: 'translateZ(-100px) scale(2)'},
                },
                {
                    src: Bg1L5,
                    style: {transform: 'translateZ(-50px) scale(1.5)'},
                },
                {
                    src: Bg1L6,
                    style: {transform: 'translateZ(0px) scale(1)'},
                },
            ]
        },
    }
}

export default backgrounds;
