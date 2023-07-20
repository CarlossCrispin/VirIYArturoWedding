import{ useState, useEffect } from 'react';
import Countdown from 'countdown';

const Section2 = () => {
  const targetDate = new Date('2023-12-16T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(Countdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Countdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-4 text-center">
      <h1 className="mb-2 text-4xl font-bold">Cuenta Regresiva</h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center mr-4">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm">Días</div>
        </div>
        <div className="flex flex-col items-center mr-4">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Horas</div>
        </div>
        <div className="flex flex-col items-center mr-4">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutos</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
