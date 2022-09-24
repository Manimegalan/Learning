  import React, { useEffect, useMemo, useState } from "react";
import "./timer.css";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function Timer({ deadline = new Date().toString() }) {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );
    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([objKey, objValue]) => (
        <div key={objKey} className="col-4">
          <div className="box">
            <p>{`${Math.floor(objValue)}`.padStart(2, "0")}</p>
            <span className="text">{objKey}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timer;
