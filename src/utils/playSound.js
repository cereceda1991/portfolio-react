import hoverSound from '../assets/sound.mp3';

const playSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
};

export default playSound;
