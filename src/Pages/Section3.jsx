

import img1 from '/img/VirArt6.jpeg';
import img2 from '/img/VirArt9.jpeg';

const Section1 = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div className="absolute z-10 grid h-screen grid-cols-2">
        <div className="relative h-screen">
          <img
            src={img1}
            alt="Imagen a pantalla completa"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        </div>
        <div className="relative h-screen">
          <img
            src={img2}
            alt="Imagen a pantalla completa"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        </div>

      </div>
      <div className="absolute z-10 h-screen">
        <img
          src={img1}
          alt="Imagen a pantalla completa"
          className="object-cover w-full h-full"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> */}

      </div>
      <div className="absolute z-20 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-4xl font-bold text-copper">Viridiana y Arturo</h1>
        <p className="text-xl text-copper">Nuestra Boda</p>
      </div>
      
    </div>
  );
};

export default Section1;
