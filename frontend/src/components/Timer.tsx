import { useEffect, useState } from "react";

const Timer = () => {
  const [day, setDay] = useState(3);
  const [hour, setHour] = useState(13);
  const [minute, setMinute] = useState(56);
  const [second, setSecond] = useState(43);

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
      <div className="grid grid-cols-7 text-xs">
        <p>Days</p>
        <span></span>
        <p>Hours</p>
        <span></span>
        <p>Minutes</p>
        <span></span>
        <p>Seconds</p>
      </div>
      <div className="grid grid-cols-7 text-3xl font-semibold">
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
