import { useEffect, useState } from "react";

interface TimerProps {
  d: number;
  h: number;
  m: number;
  s: number;
}

const Timer = ({ d, h, m, s }: TimerProps) => {
  const [day, setDay] = useState(d);
  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [second, setSecond] = useState(s);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => {
        if (prev === 0) {
          setMinute((prev) => {
            if (prev === 0) {
              setHour((prev) => {
                if (prev === 0) {
                  setDay((prev) => (prev > 0 ? prev - 1 : 0));
                  return 23;
                }
                return prev - 1;
              });
              return 59;
            }
            return prev - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [second, minute, hour, day]);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <div className="flex flex-col">
      <div className="grid justify-items-center grid-cols-7 text-xs">
        <p>Days</p>
        <span></span>
        <p>Hours</p>
        <span></span>
        <p>Minutes</p>
        <span></span>
        <p>Seconds</p>
      </div>
      <div className="grid justify-items-center grid-cols-7 text-3xl font-semibold">
        <p>{formatTime(day)}</p>
        <span className="text-brand">:</span>
        <p>{formatTime(hour)}</p>
        <span className="text-brand">:</span>
        <p>{formatTime(minute)}</p>
        <span className="text-brand">:</span>
        <p>{formatTime(second)}</p>
      </div>
    </div>
  );
};

export default Timer;
