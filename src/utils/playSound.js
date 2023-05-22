// import hoverSound from '../assets/sound.mp3';

// const playSound = () => {
//     const audio = new Audio(hoverSound);
//     audio.play();
// };

// export default playSound;
import hoverSound from "../assets/sound.mp3";

const playSound = () => {
  return new Promise((resolve) => {
    const audio = new Audio(hoverSound);
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Reproducción exitosa
          resolve();
        })
        .catch(() => {
          // Error en la reproducción, omitir
          resolve();
        });
    } else {
      // La reproducción no está soportada, omitir
      resolve();
    }
  });
};

export default playSound;
