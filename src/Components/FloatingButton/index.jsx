import PropTypes from 'prop-types';
import './FloatingButton.css';

const FloatingButton = ({ validate ,setShow }) => {

  const HandleClick = () => {
    setShow(true);
  };

  return (
    <div className={` p-2 px-8 transition-transform duration-300 ease-out transform border rounded-full floating-button-container border-slate-200 animate-pulse hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 ${validate ? 'translate-x-0 absolute right-6 bottom-5' : 'translate-x-full '} `} onClick={HandleClick}>
        <button className="floating-button" >
          Quiero enterarme de todo el chisme
        </button>
      </div>
  );
};
FloatingButton.propTypes = {
  setShow: PropTypes.func,
  validate: PropTypes.bool
}
export default FloatingButton;
