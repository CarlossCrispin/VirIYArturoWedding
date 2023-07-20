import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TypingEffectComponent from './Typing';
import videoBg from '/video.mp4'
import FloatingButton from './FloatingButton';

const VideoBackground = ({ setShow }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);
  // Simulación de la validación, establecemos isValidated a true después de 3 segundos.
  useEffect(() => {
    showFullText && setTimeout(() => {
      setValidate(true);
    }, 3000)

  }, [showFullText]); // Asegúrate de que el arreglo de dependencias esté vacío para que se ejecute solo una vez

  return (
    <div className='h-screen overflow-hidden'>
      <div className="overlay"></div>
      <video ref={videoRef} src={videoBg} autoPlay loop muted playsInline type="video/mp4"/>
      {isPlaying &&
        <div className="h-screen content">
          <TypingEffectComponent showFullText={showFullText} setShowFullText={setShowFullText}/>
          <FloatingButton setShow={setShow} validate={validate} />
          {/* {validate && <FloatingButton setShow={setShow} validate={validate} />} */}
          
        </div>
      }
    </div>
  );
};

VideoBackground.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool
}

export default VideoBackground;
