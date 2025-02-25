import { useEffect, useState } from "react";

interface TimerProps {
  d: number;
  h: number;
  m: number;
  s: number;
}

const RoundTimer = ({ d, h, m, s }: TimerProps) => {
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
    <div className="flex gap-5 my-5">
      <div className="flex-center rounded-full flex-col p-2 bg-white size-16">
        <p className="text-sm font-semibold">{formatTime(day)}</p>
        <p className="text-[10px]">Days</p>
      </div>
      <div className="flex-center rounded-full flex-col p-2 bg-white size-16">
        <p className="text-sm font-semibold">{formatTime(hour)}</p>
        <p className="text-[10px]">Hours</p>
      </div>
      <div className="flex-center rounded-full flex-col p-2 bg-white size-16">
        <p className="text-sm font-semibold">{formatTime(minute)}</p>
        <p className="text-[10px]">Minutes</p>
      </div>
      <div className="flex-center rounded-full flex-col p-2 bg-white size-16">
        <p className="text-sm font-semibold">{formatTime(second)}</p>
        <p className="text-[10px]">Seconds</p>
      </div>
    </div>
  );
};

export default RoundTimer;
