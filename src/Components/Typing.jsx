import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import './TypingEffect.css';

const TypingEffectComponent = ({ showFullText, setShowFullText }) => {
  const text = `Como en el fútbol;
Después de nuestro 1er tiempo, hace 11 años, cuando supimos que el amor es verdadero, quisimos ir por todo en el 2do tiempo, y después de 4 años …
Decidimos
Ser más felices y
Queremos contarte que …
¡Nos casamos!`;

  const [currentText, setCurrentText] = useState('');
 

  useEffect(() => {
    let currentIndex = 0;
    let interval;
    if (!showFullText) {
      interval = setInterval(() => {
        if (currentIndex <= text.length) {
          
          const currentSubstring = text.slice(0, currentIndex);
          if (currentIndex >= 1) {
            setTimeout(() => {

              setCurrentText(convertTextWithLineBreaks(currentSubstring));
            }, 30);
          } else {

            setCurrentText(convertTextWithLineBreaks(currentSubstring));
          }

          currentIndex++;
        } else {
          clearInterval(interval);
          
          setShowFullText(true);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [showFullText, text, setShowFullText]);

  const convertTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="h-screen p-12 overflow-hidden bg-opacity-25 bg-slate-900 typing-effect-container">
      <p className='text-base font-thin sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl montserrat-font'>{currentText}</p>
    </div>
  );
};

TypingEffectComponent.propTypes = {
  showFullText: PropTypes.bool,
  setShowFullText: PropTypes.bool
}
export default TypingEffectComponent;
