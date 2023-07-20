import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { RiHeartsLine } from 'react-icons/ri';

const Navbar = ({ setShow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLink, setSelectedLink] = useState({ index: null, color: 'slate-400' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (index) => {
    setSelectedLink({ index, color: 'BF8970' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const HandleClick = () => {
    setShow(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${isScrolled ? 'bg-copper-50 border-b border-copper-400 p-1 text-copper-600' : 'bg-transparent text-slate-100'
        }`}
    >
      <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo a la izquierda */}
          <div className="z-20 flex items-center justify-center" onClick={HandleClick}>
            <div className="flex items-center justify-center ">
              <RiHeartsLine size={36} />
            </div>
            <div className="ml-4">
              <p className="text-xs font-thin sm:text-base md:text-lg lg:text-xl">Agenda el Día</p>
              <p className="text-xs font-bold sm:text-base md:text-lg lg:text-xl">16 de Diciembre 2023</p>
            </div>
          </div>

          {/* Links al centro */}
          <div className="hidden md:block">
            <div className="flex items-center ml-4 space-x-4">
              <a
                href=""
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative ${selectedLink.index === 0 ? `after:border-${selectedLink.color}` : ''
                  }`}
                onClick={() => handleLinkClick(0)}
              >
                Inicio
                {selectedLink.index === 0 && <span className={`after:absolute after:w-full after:h-px after:bg-${selectedLink.color} after:bottom-0 after:left-0`}></span>}
              </a>
              <a
                href=""
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative ${selectedLink.index === 1 ? `after:border-${selectedLink.color}` : ''
                  }`}
                onClick={() => handleLinkClick(1)}
              >
                Servicios
                {selectedLink.index === 1 && <span className={`after:absolute after:w-full after:h-px after:bg-${selectedLink.color} after:bottom-0 after:left-0`}></span>}
              </a>
              <a
                href=""
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative ${selectedLink.index === 2 ? `after:border-${selectedLink.color}` : ''
                  }`}
                onClick={() => handleLinkClick(2)}
              >
                Contacto
                {selectedLink.index === 2 && <span className={`after:absolute after:w-full after:h-px after:bg-${selectedLink.color} after:bottom-0 after:left-0`}></span>}
              </a>
            </div>
          </div>
          <div>
            {/* Redes sociales a la derecha */}
            <div className="hidden md:block">
              <div className="flex items-center ml-4 space-x-4">
                <a
                  href=""
                  className="text-gray-300 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Icono de redes sociales (por ejemplo, Facebook) */}
                  </svg>
                  I
                </a>
                <a
                  href=""
                  className="text-gray-300 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Icono de redes sociales (por ejemplo, Twitter) */}
                  </svg>
                  F
                </a>
                {/* Agrega más enlaces de redes sociales según tus necesidades */}
              </div>
            </div>
            {/* Botón de menú para pantallas pequeñas */}
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Menú desplegable para pantallas pequeñas */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Contacto
            </a>
            <div className="flex items-center ml-4 space-x-4">
              <a
                href=""
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Icono de redes sociales (por ejemplo, Facebook) */}
                </svg>
                f
              </a>
              <a
                href=""
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Icono de redes sociales (por ejemplo, Twitter) */}
                </svg>
                i
              </a>
              {/* Agrega más enlaces de redes sociales según tus necesidades */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  setShow: PropTypes.func
}
export default Navbar;
