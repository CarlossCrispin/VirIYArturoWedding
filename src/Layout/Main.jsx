import PropTypes from 'prop-types';
import {Parallax} from 'react-parallax';
import Nav from '../Components/Nav';
import Section1 from '../Pages/Section1'
import Section2 from '../Pages/Section2'
import Section3 from '../Pages/Section3'
import bg from '/img/bg-floral.png';

export default function Main({ setShow } ) {
  return (
    <div className='bg-slate-50 main'>
      <Nav setShow={setShow} />
      <Parallax
        bgImage={bg}
        strength={500}
        style={{ height: '2000px' }}
      >
        {/* <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
        {/* <div className="flex items-center h-screen justify-items-center">
          <h1 style={{ color: '#fff', fontSize: '48px' }}>Efecto Parallax</h1>
        </div> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="h-screen border border-sky-100"></div>
      <div className="h-screen border border-sky-200"></div>
      <div className="h-screen border border-sky-300"></div>
      <div className="h-screen border border-sky-400"></div>
      </Parallax>
    </div>
  )
}
Main.propTypes = {
  setShow: PropTypes.func
}