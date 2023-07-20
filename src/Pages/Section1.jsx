
import { Parallax } from 'react-parallax'; 
import floral from '/img/floral.png';

export default function Section1() {
  return (
    <div className="relative h-screen">
        <Parallax
          bgImage={floral}
          strength={500}
        className='flex items-center justify-center h-screen'
        >
          <div className="absolute z-10 flex items-center justify-center w-full h-full">
            <div className='space-y-4 text-center md:space-y-12'>
              <div >
              <p className='text-xs lowercase sm:text-sm md:text-base lg:text-xl font-extralight text-slate-500'>te invitamos a celerbar nuestra boda </p>
              </div>
              <h1 className='text-2xl md:text-4xl lg:text-6xl text-slate-700'>Viridiana </h1>
              <h1 className='text-2xl text-center md:text-4xl lg:text-6xl text-slate-700'>& </h1>
              <h1 className='text-2xl text-center md:text-4xl lg:text-6xl text-slate-700'>Arturo </h1>
              {/* <div >
                <p className='text-sm lowercase md:text-base lg:text-xl font-extralight text-slate-500'>La misa sera en la señora del asoledad 9:00PM</p>
                <p className='text-sm lowercase -translate-y-2 md:text-base lg:text-xl font-extralight text-slate-500'> Diaz miron</p>
              </div> */}
            <p className='py-2 text-sm lowercase border-t-2 border-b-2 border-slate-700 md:text-base lg:text-xl font-extralight text-slate-500'>Diciembre 16 2023</p>
            </div>
          </div>
        </Parallax>
      {/* <div className="absolute z-10 flex items-center justify-center w-full h-screen ">

        <img
          src={floral}
          alt="Imagen a pantalla completa"
          className="absolute z-20 w-auto h-auto bg-scroll md:w-full"
        />
        <div className='space-y-4 text-center md:space-y-12'>
          <div >
            <p className='text-sm lowercase md:text-base lg:text-xl font-extralight text-slate-500'>te invitamos a celerbar </p>
            <p className='text-sm lowercase -translate-y-2 md:text-base lg:text-xl font-extralight text-slate-500'> nuestra boda</p>
          </div>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-slate-700'>Viridiana </h1>
          <h1 className='text-2xl text-center md:text-4xl lg:text-6xl text-slate-700'>& </h1>
          <h1 className='text-2xl text-center md:text-4xl lg:text-6xl text-slate-700'>Arturo </h1>
          <div >
            <p className='text-sm lowercase md:text-base lg:text-xl font-extralight text-slate-500'>te invitamos a celerbar </p>
            <p className='text-sm lowercase -translate-y-2 md:text-base lg:text-xl font-extralight text-slate-500'> nuestra boda</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
