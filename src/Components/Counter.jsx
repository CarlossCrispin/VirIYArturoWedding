import { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import PropTypes from 'prop-types';


export default function Counter({ setShow }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (percentage < 100) {
        setPercentage(prevPercentage => prevPercentage + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShow(true)
        }, 300);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [percentage, setShow]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <div className="percentage-display">
          <span className='text.slate-900 text-7xl font-bold text-center'>{percentage}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar bg-emerald-400" style={{ width: `${percentage}%` }}>
            <AiOutlineMail className="envelope-icon color-sky-600" size={30} color="pink"/> {/* Agrega el icono de sobre */}
          </div>
        </div>
      </div>
    </div>
  );
}

Counter.propTypes = {
  setShow: PropTypes.func
}
