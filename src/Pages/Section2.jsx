import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2023-12-16T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

export default CountdownTimer;
